import { useCallback, useEffect, useState } from "react"


function PasswordGenrater() {


    const [Password, setPassword] = useState("12345678")
    const [length, setLength] = useState(0)
    const [numberAllow, setnumberAllow] = useState(false)
    const [CharAllow, setCharAllow] = useState(false)




    const passwordGenrater = useCallback(() => {

        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let number = "1234567890";
        let char = "!@#$%&()";

        if (numberAllow) str += number;
        if (CharAllow) str += char;

        for (let i = 1; i <= length; i++) {

            let n = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(n)

        }

        setPassword(pass)

    }, [
        length, setPassword, numberAllow, CharAllow
    ])


    useEffect(() => {
        passwordGenrater()
    }, [length, setPassword, numberAllow, CharAllow, passwordGenrater])

    return (
        <div className=" text-orange-700 font-bold text-4xl max-w-3xl mx-auto bg-gray-800 rounded-lg px-4 py-3 my-8 ">

            <h1 className=" text-center text-white my-3 text-5xl font-bold ">Password Genrater </h1>

            <div className=" flex overflow-hidden mb-4 ">

                <input
                    type="text"
                    readOnly
                    placeholder="Password Field"
                    value={Password}
                    className=" text-black outline-none w-full py-1 px-3 bg-amber-50 text-3xl"

                />

                <button className=" bg-blue-900 text-white px-3 py-1 outline-none shrink-0 text-3xl font-bold cursor-pointer ">Copy</button>

            </div>
            <div className=" flex text-sm gap-x-2 ">

                <div className=" flex items-center gap-x-1">
                    <input
                        type="range"
                        min={0}
                        max={20}
                        value={length}
                        className=" cursor-pointer"
                        onChange={(e) => { setLength(e.target.value) }}
                        readOnly
                    />
                    <label className=" text-3xl ">Length {length}</label>
                </div>


                <div className="flex items-center gap-x-2 text-3xl px-4">
                    <input className=" text-2xl py-1 px-1 cursor-pointer"
                        type="checkbox"
                        defaultChecked={numberAllow}
                        id="numberInput"
                        onChange={() => {
                            setnumberAllow((prev) => !prev);
                        }}
                    />
                    <label htmlFor="numberInput" className=" cursor-pointer" > Numbers </label>
                </div>

                <div className="flex items-center px-3 py-3 text-3xl gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        defaultChecked={CharAllow}
                        id="charInput"
                        onChange={() => {
                            setCharAllow((prev) => !prev);
                        }}
                    />
                    <label htmlFor="charInput" className=" cursor-pointer"> Characters </label>
                </div>



            </div>


        </div >

    )
}

export default PasswordGenrater