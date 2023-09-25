import React from 'react';
import './ListOfTeam.css';

const ListOfTeam = () => {
    const people = [
        {
            name: "Sammie Mendez",
            role: "Android Developer",
            favoriteFood: "Sushi",
            responsibleFor: "Backend Development",
            image: "src/assets/sammie_vmlyr.jfif"
        },
        {
            name: "Angela Mitchell",
            role: "Web Developer",
            favoriteFood: "Pasta",
            responsibleFor: "Design and Frontend",
            image: "src/assets/angela_mitchell.jfif"
        },
        {
            name: "Kavin Moreno",
            role: "Full Stack Developer",
            favoriteFood: "For now: Kansas City Burnt ends",
            responsibleFor: "Frontend, Backend, Middleend",
            image: "src/assets/kavin_moreno.jfif"
 
        },
        {
            name: "Elizabeth Beckerle",
            role: "Full Stack Developer",
            favoriteFood: "Spagetti (code)",
            responsibleFor: "Frontend Development",
            image: "src/assets/EBpic.jpg"

        }
    ];

    return (
        <div className="team-container">
            <h3>Development Team</h3>
            <div className="profiles">
                {people.map((person, index) => (
                    <div key={index} className="profile-card">
                        <img src={person.image} alt={person.name} className="profile-image" />
                        <h4>{person.name}</h4>
                        <p><strong>Role:</strong> {person.role}</p>
                        <p><strong>Favorite Food:</strong> {person.favoriteFood}</p>
                        <p><strong>Responsible For:</strong> {person.responsibleFor}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListOfTeam;
