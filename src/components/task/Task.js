import { Component } from "react";

export default class TaskNow extends Component{
    render(){
        return(
            <div>
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name"/>
                    </div>
                    <div>
                        <label>emial:</label>
                        <input type="email" name="name"/>
                    </div>
                    <div>
                        <label>password:</label>
                        <input type="password" name="name"/>
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}