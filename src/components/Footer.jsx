

export default function Footer() {

    return (
        <footer className="bg-grey-700 text-white p-6 mt-auto rounded-t-xl shadow-lg">
            <div className="container mx-auto text-center">
                <p>
                    @ {new Date().getFullYear()} Juma • Built with React + Vite + Tailwind
                </p>
            </div>
        </footer>
    )
}