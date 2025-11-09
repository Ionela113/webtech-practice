import "./index.css"
import axios from "axios";

// function async onButtonClick() {

// }

const onButtonClick = async () => {
    try {
        const response = await axios.get("http://localhost:3001/");
        console.log(response.data);
    } catch (err) {
        console.log("Nu a functionat")
    }
}

export const HomePage = () => {
    return (
        <div>
            <button onClick={onButtonClick}>TEST</button>
        </div>
    )
}
