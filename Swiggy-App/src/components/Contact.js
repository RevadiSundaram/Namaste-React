const Contact = () => {
    return (
        <div>
            <h1 className="font-bold test-3xl p-4 m-4">Contact us page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="message" />
                <button className= "p-2 m-2 rounded-md bg-black text-white">Submit</button>
            </form>
        </div>
    )
}
export default Contact;