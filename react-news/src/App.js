import React, { useEffect, useState } from "react";
import NewsList from "./components/NewsList";
import "./App.css";

const DUMMY_ARTICLES = [
    {
        title: "The Trial Over Bitcoin's True Creator Is in Session",
        author: "Joel Khalili",
        description:
            "A UK High Court will settle a long-running debate over whether Craig Wright really is Satoshi Nakamoto, inventor of Bitcoin. Monday's opening arguments laid the groundwork for both sides.",
        url: "https://www.some-dummy-link.com/",
    },
    {
        title: "Exploring the Future of Renewable Energy: Innovations and Challenges",
        author: "Sarah Patel",
        description:
            "As the world shifts towards sustainable energy sources, experts delve into the latest innovations in renewable energy technologies and the challenges faced in their widespread adoption.",
        url: "https://www.dummy-link2.com/",
    },
    {
        title: "AI Breakthrough: Deep Learning Model Achieves Human-Level Performance in Language Understanding",
        author: "David Chen",
        description:
            "A new deep learning model has reached a significant milestone by demonstrating human-level performance in language understanding tasks. This advancement paves the way for enhanced natural language processing applications.",
        url: "https://www.dummy-link3.com/",
    },
    {
        title: "Global Efforts to Combat Climate Change Intensify Ahead of COP30 Summit",
        author: "Emma Reynolds",
        description:
            "With climate change impacts becoming increasingly evident, nations worldwide ramp up efforts to mitigate greenhouse gas emissions and adapt to environmental challenges in preparation for the upcoming COP30 summit.",
        url: "https://www.dummy-link4.com/",
    },
    {
        title: "Advancements in Quantum Computing: Unlocking the Potential of Quantum Supremacy",
        author: "Ryan Johnson",
        description:
            "Recent breakthroughs in quantum computing bring us closer to achieving quantum supremacy, promising exponential improvements in processing power with profound implications for various fields, including cryptography and drug discovery.",
        url: "https://www.dummy-link5.com/",
    },
    {
        title: "The Rise of Virtual Reality: Transforming Entertainment and Beyond",
        author: "Sophie Lee",
        description:
            "Virtual reality technology continues to evolve rapidly, revolutionizing entertainment experiences and expanding into diverse industries such as education, healthcare, and architecture. Discover the latest trends shaping this immersive medium.",
        url: "https://www.dummy-link6.com/",
    },
    {
        title: "Unlocking the Secrets of the Universe: Latest Discoveries in Astrophysics",
        author: "Daniel Taylor",
        description:
            "Astrophysicists unveil groundbreaking discoveries shedding light on the mysteries of the cosmos, from the nature of dark matter and black holes to the origins of the universe itself. Journey into the depths of space with the latest research.",
        url: "https://www.dummy-link7.com/",
    },
    {
        title: "The Future of Work: Embracing Remote Collaboration and Digital Transformation",
        author: "Alexandra Martinez",
        description:
            "As remote work becomes increasingly prevalent, organizations adapt to new ways of collaboration and embrace digital transformation initiatives to ensure productivity and resilience in the evolving workplace landscape.",
        url: "https://www.dummy-link8.com/",
    },
    {
        title: "Emerging Technologies in Healthcare: Revolutionizing Patient Care",
        author: "Kevin Anderson",
        description:
            "From telemedicine and wearable devices to AI-driven diagnostics and personalized medicine, emerging technologies are reshaping healthcare delivery, improving patient outcomes, and driving innovations in medical research.",
        url: "https://www.dummy-link9.com/",
    },
    {
        title: "The Art of Culinary Innovation: Exploring Trends in Food and Gastronomy",
        author: "Isabella Rossi",
        description:
            "In the ever-evolving world of gastronomy, chefs and food enthusiasts embrace innovation, exploring new culinary trends, sustainable practices, and cultural influences to redefine the art of cooking and dining.",
        url: "https://www.dummy-link10.com/",
    },
];

function App() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        async function fetchArticles() {
            setLoading(true);
            const response = await fetch('https://newsapi.org/v2/everything?q=usa&apiKey=bf71948eaf464bf484aaac2b0d155999&pageSize=25');
         
            const data = await response.json();
            if (data.status === "ok") {
                const filteredArticles = data.articles.map((article) => ({
                    title: article.title,
                    author: article.author,
                    description: article.description,
                    url: article.url,
                }));
                setArticles(filteredArticles);
            } else {
                alert("Error fetching articles");
            }
            setLoading(false);
        }

        fetchArticles();
    }, []);


    if (loading) {
        return (
            <div className="appWrapper">
                <h1>Today's News</h1>
                <p style={{ marginTop: "2rem" }}>Loading...</p>
            </div>
        );
    }

    return (
        <div className="appWrapper">
            <h1>Today's News</h1>
            <NewsList pageNo={pageNo} pageSize={pageSize} articles={articles} />
            <div className="actions">
                <button
                    onClick={() => setPageNo((prev) => prev - 1)}
                    disabled={pageNo === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => setPageNo((prev) => prev + 1)}
                    disabled={pageNo === 5}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;