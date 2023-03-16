import {useState} from "react";



export default function Header(personData) {
    

    

    return (
                        <header>
                <nav
                    class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
                    data-te-navbar-ref>
                    <div class="flex w-full flex-wrap items-center justify-between px-6">
                    <div class="flex items-center">
                        <button
                        class="mr-2 border-0 bg-transparent py-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContentY"
                        aria-controls="navbarSupportedContentY"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        
                        </button>
                    </div>
                    <div
                        class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContentY"
                        data-te-collapse-item>
                        <ul
                        class="mr-auto flex flex-col lg:flex-row"
                        data-te-navbar-nav-ref>
                        <li data-te-nav-item-ref>
                            <a
                            class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                            href="#!"
                            data-te-nav-link-ref
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            >Resume Builder</a
                            >
                        </li>
                        
                        </ul>
                    </div>
                    
                    </div>
                </nav>
                </header>


    )
}