'use client'

import Image from "next/image"

export default function HomePage() {
    return (
        <>
            <section>
                <div>
                    <Image 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Y52vbDAXFdacMmeuCAb0sTfP_Cs1D6M9Sn61anDOrjhHIJGq3aK2eH8v53xP2Z2bDRqntG5hFlj2eW_CEIPzqXneOrEg5IQUOsxQibgCqiv4rPGgsnrKhN9eq0EQ9LXuWqPD5r_capj-YgGfnc6G4GN3GOuDh2XhxHUHhqt6wRePJmbNDLFapFtg22LH0NJ9EFYy-KWGWeh8LPK0Hu7774HF8pspBv2wVfEBGnFQbT2ooEdRY-pyv36oX-L5HsWF20vICqJY1ks"
                        alt="Luxurious modern living room"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>
        </>
    )
}