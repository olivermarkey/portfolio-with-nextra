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
                        <br />
                        This project was the second half of my capstone unit at Monash University. To see the first part checkout 
                        the TravelPlanner project listed under the projects section. During this project I worked with a client 
                        from Monash University to assist in building a client procurement system. Unfortunately as this project 
                        will eventually reach production I am unable to demonstrate it&apos;s full capability due to a deed of
                        confidentiality. Once again during this project my team worked with an iterative development approach that
                        followed the agile methodology and constantly implemented feedback based on our client&apos;s needs. We 
                        developed a full-stack webapplication using the CakePHP framework. During this projected I developed the 
                        system using HTML, CSS, javascript, PHP and mySQL. I also worked regularly with the client were I demonstrated
                        communication, problem solving and objection handling skills.
                    </p>
                </div>
                <Footer />
            </div>
        </main>

    )
}