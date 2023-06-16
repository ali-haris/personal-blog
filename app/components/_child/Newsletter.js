import Section1 from "../Section1"

export default function Newsletter() {
    return (
        <>
            <section className='bg-gray-50 mt-20'>

                <div className="container mx-auto md:px-20 py-12 text-center">
                    <h1 className="font-bold text-3xl">Subscribe Newsletter</h1>
                    <div className="py-4">
                        <input type="text" className="s" />
                    </div>
                </div>
            </section>
        </>
    )
}