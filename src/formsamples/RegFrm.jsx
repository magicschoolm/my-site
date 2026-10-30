import {useState } from 'react'
import "./RegFrm.css"



export const RegFrm = () => {
    const [user, setuser] = useState({
        name: "your name",
        age: 23,
        gender: "male",
        isMarried: false,
        country: "india",
        bio: "write about you",
    })


    function changeHandeler(e) {
        const name = e.target.name
        const value = e.target.type === "checkbox" ? e.target.checked  : e.target.value
        setuser({...user, [name]: value})
    }


  return (
    <>
    <table> 
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Marital Status</td>
                <td>{user.isMarried ? "Married": "Not Married"}</td>
            </tr>
            <tr>
                <td>country</td>
                <td>{user.country}</td>
            </tr>
            <tr>
                <td>bio</td>
                <td>{user.bio}</td>
            </tr>
        </tbody>
    </table>
    <form>
        <input type="text" placeholder='FullName' value={user.name} onChange={changeHandeler} name="name"/>
        <input type="number" placeholder='Age' value={user.age} onChange={changeHandeler} name="age"/>
        <div className='Gender'>
            <label htmlFor="male">
            <input type='radio' name='gender' onChange={changeHandeler} id="male" checked={user.gender == "Male"} value="Male"/>
                Male
            </label>
        {/* <div className='Gender'> */}
            <label htmlFor="female">
                <input type='radio' name='gender' onChange={changeHandeler} id="female" checked={user.gender == "Female"}value="Female"/>
                female
            </label>
        </ div>
        <label htmlFor="isMarried">
                <input type='checkbox' onChange={changeHandeler} id="isMarried" checked={user.isMarried} name="isMarried"/>
                isMarried
            </label>
            <div className="select_country">
                <label htmlFor="country">select country:</label>
                    <select name="country" id="country" value={user.country} onChange={changeHandeler}>
                    <option value="india"> </option>
                    <option value="miami"> </option>
                    <option value="usa"> </option>
                    <option value="uk"> </option>
                    </select>
            </div>
            <textarea name="bio" id="bio" cols="30" rows="5" placeholder='write something' value={user.bio} onChange={changeHandeler}></textarea>    
    </form>
        </>
    )
}
