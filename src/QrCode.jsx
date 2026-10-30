import { useState } from "react"




export const QrCode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false)
    const [qrData, setQrData] = useState("https://chatgpt.com/")
    const [qrSize, setQrSize] = useState("150")

    async function generateQR() {
        setLoading(true)
        try {
            const url =`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url)
        } catch (error) { console.error(error);
        }finally {
            setLoading(false)
        }        
    }
    function downloadQR() {
        fetch(img).then((Response) => Response.blob())
        .then((blob) => {
            const link=document.createElement("a")
            link.href = URL.createObjectURL(blob)
            link.download="qrcode.png"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
        .catch((error) => {
            console.error(error)
        })
    }
    return (
    <div className="app-container">
        <h1> QR Code Generator</h1>
        {loading && <p>please waite...</p>}
        {img && <img src={img} className="qr-code-image" />}
        <div>
            <label htmlFor="datainput" className="input-label">
            Data for QR code:
            </label>
            <input type="text" className="qr-input-link" value={qrData} id="datainput" placeholder="enter url's for QR code" onChange={(e) => setQrData(e.target.value)}/>
            <label htmlFor="sizeInput" className="input-label">
                image size (eg: 150):
            </label>
            <input type="text" className="qr-input-size"  value= {qrSize} id="sizeInput" onChange={(e) => setQrSize(e.target.value)}  placeholder="enter img size" />
            <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR Code</button> 
            <button className="downloadbutton" onClick={downloadQR} >Download QR Code</button> 
        </div>
    </div>
  )
}
