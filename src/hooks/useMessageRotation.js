import { useEffect, useState } from 'react';

// Set messages rotation
const useMessageRotation = () => {
    const [currentSlotIndex, setCurrentSlotIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const rotationTime = 20000;

    const commentsContent = [
        [
            { photoPath: '/images/comments/c1.png', name: '1Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' },
            { photoPath: '/images/comments/c2.png', name: '2Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' },
            { photoPath: '/images/comments/c3.png', name: '3Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' }
        ],[
            { photoPath: '/images/comments/c2.png', name: '4Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' },
            { photoPath: '/images/comments/c3.png', name: '5Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' },
            { photoPath: '/images/comments/c1.png', name: '6Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' }
        ],[
            { photoPath: '/images/comments/c3.png', name: '7Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' },
            { photoPath: '/images/comments/c2.png', name: '8Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' },
            { photoPath: '/images/comments/c1.png', name: '9Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' }
        ],[
            { photoPath: '/images/comments/c1.png', name: '10Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' },
            { photoPath: '/images/comments/c2.png', name: '11Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' },
            { photoPath: '/images/comments/c3.png', name: '12Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' }
        ],[
            { photoPath: '/images/comments/c2.png', name: '13Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' },
            { photoPath: '/images/comments/c3.png', name: '14Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' },
            { photoPath: '/images/comments/c1.png', name: '15Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' }
        ],[
            { photoPath: '/images/comments/c3.png', name: '16Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' },
            { photoPath: '/images/comments/c2.png', name: '17Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' },
            { photoPath: '/images/comments/c1.png', name: '18Munachi Cheks', position: 'CEO Tech-x', comment: 'Attending the Tech Innovators Summit was a game-changer for me! The event was incredibly well-organized, with insightful speakers who are true leaders in the tech industry. I gained valuable knowledge on the latest trends and future technologies, and the networking opportunities were fantastic' }
        ],
    ];



    useEffect(() => {
        stopOnHover(setIsHovered);

        const messages = document.getElementsByClassName('comment');
        const rotationInterval = setInterval(() => {
            if(!isHovered){
                // HIDE MESSAGES
                for(const m of messages){m.classList.add('fade-out');}
                // TIMEOUT TO CHANGE THE CONTENT AFTER THE MESSAGE DISAPPEAR COMPLETELY
                setTimeout(() => {setCurrentSlotIndex((prevIndex) => (prevIndex + 1) % commentsContent.length);}, 400);
                // SHOW BACK MESSAGES WITH THE NEW CONTENT
                setTimeout(() => {for(const m of messages){m.classList.remove('fade-out');};}, 600);
            }
        }, rotationTime); 

        return () => clearInterval(rotationInterval);
    }, [commentsContent]);

    const currentSlotData = commentsContent[currentSlotIndex];

    return { currentSlotData };
};

const stopOnHover = (setIsHovered) => {
    document.getElementById('commentItem1').addEventListener('mouseover', () => {setIsHovered(true)});
    document.getElementById('commentItem2').addEventListener('mouseover', () => {setIsHovered(true)});
    document.getElementById('commentItem3').addEventListener('mouseover', () => {setIsHovered(true)});
    document.getElementById('commentItem1').addEventListener('mouseout', () => {setIsHovered(false)});
    document.getElementById('commentItem2').addEventListener('mouseout', () => {setIsHovered(false)});
    document.getElementById('commentItem3').addEventListener('mouseout', () => {setIsHovered(false)});
}

export default useMessageRotation;