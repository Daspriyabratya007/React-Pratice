const Aleart =()=>{
    function handleOnChange(e){
        console.log("Input is changed", e.target.value);
    }
    return(
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-64 ml-96">
            <form>
                <input type="text" onChangeCapture={handleOnChange}/>
            </form>
        </div>
    );
}
export default Aleart;