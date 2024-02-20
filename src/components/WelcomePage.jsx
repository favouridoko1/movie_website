import styles from './welcomePage.module.css'
export default function WelcomePage() {
    return (
        <div className={styles.parent}>
            <div className={styles.modelContainer}>
                <div className={styles.modelHeader}>
                    <p className={styles.fbox}>fbok</p>
                        <input type="text" placeholder="Search movies..."/>
                    <p>Watch Movies Online in HD For Free!</p>
                    <button>Go to Homepage</button>  

                </div>
                <div>
                    <p>

                        Welcome to Fbox, the ultimate destination for movie lovers! Get ready to unlock a world of cinematic wonders with our extensive database and a host of exciting features. With an unparalleled collection of films spanning genres, eras, and languages, Fbox ensures there's something for every taste and mood.
                    </p>
                    <p>
                        At Fbox, we understand the diverse preferences of our viewers, and that's why we have meticulously curated a library that caters to all cinematic cravings. Whether you're a fan of action-packed blockbusters, heartwarming romances, mind-bending sci-fi, gripping thrillers, or critically acclaimed indie films, our vast collection guarantees endless entertainment.
                    </p>
                    <p>

                        But Fbox offers more than just a large movie database. We believe in providing a holistic and immersive streaming experience. That's why we've incorporated an innovative "Movie Night Planner" feature. Now you can create personalized movie nights with friends and family, selecting movies from our collection, scheduling start times, and inviting others to join your virtual movie screening. It's the perfect way to recreate the magic of a shared movie-watching experience, no matter where your loved ones are.
                     </p>
                    <p>
                            In addition, our advanced search and filtering options make it a breeze to discover your next favorite film. Dive into our library and explore movies based on genre, release year, director, actors, and more. With our user-friendly interface, you can easily find hidden gems, explore filmographies, and delve into the works of your favorite actors or directors.
                    </p>
     
                    <p>
                            At Fbox, we value community engagement and the power of discussion. Join our vibrant online community where you can share your thoughts, exchange recommendations, and engage in conversations with fellow movie enthusiasts. Connect with like-minded individuals, participate in polls, and dive into in-depth discussions about your favorite films and cinematic topics.
    
                    </p>
                    <p>

                        To ensure accessibility, Fbox is available across all devices. Stream your favorite movies seamlessly on your desktop, laptop, tablet, or smartphone. Take your cinematic adventure with you wherever you go, whether you're on a cozy night in or on the move.
                    </p>
                    <p>
                             Welcome to Fbox, where the magic of movies comes alive. Immerse yourself in our vast collection, discover new favorites, and connect with a community of passionate film lovers. It's time to elevate your movie-watching experience with Fbox. Get ready to indulge in a world of cinematic delights at your fingertips!
                    </p>
                       
                    </div>
            </div>
        </div>
    )
}