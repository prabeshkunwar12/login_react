import React,{ useState }from "react";
import '../index.css'

function Table() {
    const [userData, setUserData] = useState([]);
    const [name, setName] =useState('');
    const [id, setID] = useState(1);
    const [age, setAge] = useState(1);
    const [sex, setSex] = useState("M");

    const handleAddData = (e) => {
        e.preventDefault();
        let data= {id: id, name: name, age: age, sex: sex};
        setID(id+1);
        setName('');
        setUserData([...userData, data]);
    }
    const handleRemoveData = (id) => {
        const updatedData = userData.filter((data) => data.id != id);
        setUserData(updatedData);
    }
    const handleFilterData = (field, constraint) => {
        if (field==="id"){
            const updatedData = handlefilterID(constraint);
        }
        else if (field==="name"){
            const updatedData = handlefilterName(constraint);
        }
        else if (field==="age"){
            const updatedData = handlefilterAge(constraint);
        }
        else if (field==="sex"){
            const updatedData = handlefilterSex(constraint);
        }
        else {
            const updatedData = userData;
        }
    }
    return (
        <>
            <div class="form">
                <form onSubmit={handleAddData}>
                    <p></p>
                    <label for="name">
                        <span>Name: </span><input id="name" class="name" value={name} type="text" onChange={(e) => setName(e.target.value)} />
                    </label>
                    <p></p>
                    <label for="age">
                        <span>Age: </span><input id="age" class="age" value={age} type="Number" onChange={(e) => setAge(e.target.value)} />
                    </label>
                    <p>
                        <label for="male">
                            <span>Male </span><input name="sex" id="male" class="sex" value={sex} type="radio" onChange={(e) => setSex(e.target.value)} />
                        </label>
                        <label for="female">
                            <span>Female: </span><input name="sex" id="female" class="sex" value={sex} type="radio" onChange={(e) => setSex(e.target.value)} />
                        </label>
                    </p>
                    <label for="submit">
                        <input type="submit" name="submit" class="submit" value="Submit" />
                    </label>
                </form>
            </div>
            <div class="table">
                <table>
                    <tr><th>User ID</th><th>User Name</th><th>Age</th><th>Sex</th><th></th></tr>
                    <tbody>
                        {userData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.sex}</td>
                                <td><button onClick={()=>handleRemoveData(item.id)}>Remove</button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default Table;