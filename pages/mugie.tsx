import NavBar from "../components/NavBar"
import Footer from "../components/Footer";


export default function TravelPlanner() {

    return (
        <main className="flex min-h-screen flex-col bg-slate-900 dark:bg-gradient-to-bl dark:from-slate-700 dark:to-slate-1000">
            <NavBar />
            <div className='container mt-20 mx-auto px-12 py-4'>
                <div className="flex justify-center mb-4">
                    <h2 className='text-4xl font-bold mb-4 text-center'>Monash Client Procurement System</h2>
                </div>
                <img src="/images/mugie.png" />
                <div className="mt-4 md:pr-20 md:pl-20">
                    <p className="text-white text-base">
                        The TravelPlanner website was a project I worked on during one of my subjects at Monash University.
                        During the project my team of 5 students used an iterative approach following agile methodology during
                        development. Together we built a customer facing website similar to that of flight center where customers
                        could create an account and submit an enquiry to be followed up by travel agents later. The website was
                        also fully customizable via a CMS available to authenticated admin users. This meant that everything
                        from the packages available to the businesses name was fully dynamic reducing the need for support down
                        the line.
                        <br />
                        This project was completed as a practice run for another unit where I worked with a real-world client
                        to design and develop a business system.
                    </p>
                </div>
                <Footer />
            </div>
        </main>

    )
}