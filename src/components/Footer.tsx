import React from 'react'

function Footer() {
    return (
        <footer className="py-6 mt-12 text-center text-gray-600 bg-gray-100 flex-none">
            <div className="container px-4 mx-auto">
                <p>Sponsored by: the Carstairs &amp; District Agricultural Society</p>
                <p className="mt-2">
                    <a href="https://CarstairsAgSociety.ca" className="text-blue-500 hover:underline">
                        CarstairsAgSociety.ca
                    </a>
                </p>
                <p className="mt-4 text-sm">Ages 17 &amp; under</p>
            </div>
        </footer>
    )
}

export default Footer
