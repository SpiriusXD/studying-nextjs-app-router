import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
    return (
        <div >


            <div style={{
                border: "2px solid black", width: "400px", height: "700px",

                padding: 100


            }}>

                <h1>Basic Client Explanation</h1>

                <h2>This is Home page</h2>
                <p>In Next App Router - everything is working by the folder structure.
                    See the "DOCS" Explanation for further</p>
                <p>For example this page is page.js in the root, and the url for it is:
                    http://localhost:3000/</p>
                <p>Pay attention that you need to pass <b>only one</b> of route.js OR page.js,
                    because if you create them both - next will confused which one to choose. </p>


                <h3>Those are links with a html tag</h3>

                <p><a href={"/pages/draft"} target="_blank">Draft</a> |
                    <a href={"/pages/memory-game"} target="_blank"> Memory Game
                    </a>
                </p>

                <h3>And those are with the "Link" predefined component of next</h3>
                <Link href={"/pages/draft"} target="_blank">Draft</Link> |
                <Link href={"/pages/memory-game"} target="_blank"> Memory Game
                </Link>
 |
                <Link href={"/pages/docs"} target="_blank"> DOCS
                </Link>


            </div>

        </div>
    );
}
