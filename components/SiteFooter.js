import Link from "next/link";


export default function SiteFooter() {


    return (
        <>
            <footer id="site-footer" className="bg-slate-200">
                <div className="flex justify-between items-center container mx-auto lg:max-w-5xl">
                    <div className="py-3">&copy; MidhaFin</div>
                    <ul className="flex [&>li>a]:px-2">
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href='/faq'>FAQ</Link>
                        </li>
                        <li>
                            <Link href='/refund-policy'>Refund Policy</Link>
                        </li>
                    </ul>
                </div>

            </footer>
        </>
    )
}