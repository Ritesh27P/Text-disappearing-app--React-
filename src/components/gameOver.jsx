import React from "react";
const gameOver = ()=>{
    return <div>
        <h1>Game Over</h1>
        <form action="/">
            <input type="submit" value="Try Again" />
        </form>
    </div>
}

export default gameOver;