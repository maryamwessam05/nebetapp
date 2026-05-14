import React, { useState } from 'react';
import "./style.css";
import sidelogo from "../assets/sidelogo.svg";
import { supabase } from "../supabase";
import Button from '../components/button';
import { Link } from 'react-router-dom';


const StarIcon = ({ filled, onClick, onHover, onLeave }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill={filled ? "#F0E1CE" : "none"}
        onClick={onClick}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        style={{ cursor: 'pointer', transition: 'fill 0.2s ease, transform 0.15s ease', transform: filled ? 'scale(1.1)' : 'scale(1)' }}
    >
        <path
            d="M23.0479 4.58958C23.1356 4.41252 23.271 4.26348 23.4388 4.15927C23.6067 4.05507 23.8003 3.99985 23.9979 3.99985C24.1954 3.99985 24.3891 4.05507 24.5569 4.15927C24.7248 4.26348 24.8601 4.41252 24.9478 4.58958L29.5673 13.9467C29.8717 14.5626 30.3209 15.0954 30.8765 15.4995C31.4321 15.9035 32.0774 16.1667 32.7571 16.2665L43.0881 17.7784C43.2839 17.8067 43.4678 17.8893 43.619 18.0167C43.7703 18.1442 43.8829 18.3114 43.9441 18.4995C44.0052 18.6876 44.0126 18.8891 43.9652 19.0811C43.9178 19.2732 43.8177 19.4481 43.6761 19.5862L36.2047 26.8615C35.712 27.3417 35.3434 27.9344 35.1305 28.5886C34.9177 29.2429 34.867 29.939 34.9829 30.6172L36.7467 40.8963C36.7812 41.0919 36.7601 41.2933 36.6857 41.4776C36.6113 41.6618 36.4866 41.8214 36.3258 41.9381C36.1651 42.0549 35.9747 42.1241 35.7765 42.1379C35.5783 42.1517 35.3802 42.1095 35.2048 42.0161L25.9697 37.1606C25.3612 36.8411 24.6842 36.6741 23.9969 36.6741C23.3096 36.6741 22.6326 36.8411 22.024 37.1606L12.7909 42.0161C12.6156 42.109 12.4177 42.1507 12.2198 42.1366C12.022 42.1226 11.832 42.0533 11.6716 41.9366C11.5111 41.8199 11.3867 41.6606 11.3123 41.4766C11.238 41.2927 11.2167 41.0916 11.251 40.8963L13.0129 30.6192C13.1292 29.9407 13.0788 29.2441 12.866 28.5895C12.6531 27.9348 12.2842 27.3418 11.791 26.8615L4.31966 19.5882C4.17686 19.4503 4.07567 19.275 4.02762 19.0824C3.97956 18.8898 3.98657 18.6875 4.04785 18.4987C4.10912 18.3098 4.22221 18.142 4.37421 18.0143C4.52622 17.8866 4.71103 17.8042 4.90761 17.7764L15.2367 16.2665C15.9171 16.1675 16.5633 15.9047 17.1197 15.5006C17.676 15.0965 18.1258 14.5632 18.4304 13.9467L23.0479 4.58958Z"
            stroke="#F0E1CE"
            strokeOpacity={filled ? "1" : "0.3"}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const Rating = () => {
    const [hovered, setHovered] = useState(0);
    const [selected, setSelected] = useState(0);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState('');

    const resetForm = () => {
        setSelected(0);
        setHovered(0);
        setMessage('');
        setError(null);
    };

    const handleSubmit = async () => {
        if (!selected) return;

        setLoading(true);
        setError(null);
        setSuccessMsg('');

        const newRow = {
            ratingstars: selected,
            ...(message.trim() && { msgcontent: message.trim() }),
            date: new Date().toISOString().split('T')[0], 
            status: 'new',
        };

        const { error: supabaseError } = await supabase
            .from('messages')
            .insert(newRow);

        setLoading(false);

        if (supabaseError) {
            setError('Something went wrong. Please try again.');
            console.error(supabaseError);
        } else {
            setSuccessMsg('Your rating has been submitted! ✨');
            resetForm();
            setTimeout(() => setSuccessMsg(''), 3000);
        }
    };

    const activeRating = hovered || selected;

    return (
        <>
            <main>
                <div className="ticketscreen">
                    <img src={sidelogo} alt="" />
                    <div className="contt">
                        <Link to={"/home"}>
                            <div className="back">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="19" viewBox="0 0 32 19" fill="none">
                                    <path d="M10.5593 18.4174C10.5593 17.4412 9.59179 15.9836 8.61242 14.7602C7.35322 13.1816 5.84853 11.8042 4.1234 10.7531C2.82989 9.9651 1.26183 9.20868 0 9.20868M0 9.20868C1.26183 9.20868 2.83121 8.45225 4.1234 7.66425C5.84853 6.61183 7.35322 5.23447 8.61242 3.65847C9.59179 2.43372 10.5593 0.973484 10.5593 -5.72205e-06M0 9.20868H31.6779" stroke="#F0E1CE" strokeWidth="1.90313"/>
                                </svg>
                            </div>
                        </Link>
                        <h1 className='header'>Explore Sections</h1>
                    </div>

                    <h5 className='head'>How was your journey through ancient beauty?</h5>

                    {successMsg && (
                        <p className="rating-success">{successMsg}</p>
                    )}

                    <div className="stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon
                                key={star}
                                filled={star <= activeRating}
                                onClick={() => setSelected(star)}
                                onHover={() => setHovered(star)}
                                onLeave={() => setHovered(0)}
                            />
                        ))}
                    </div>

                    <div className="ratingmsg">
                        <h5>Share your thoughts (optional)</h5>
                        <textarea
                            placeholder='What did you enjoy most about the exhibition?'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div className="ratingbtns">
                        <button
                            className="rating-submit"
                            onClick={handleSubmit}
                            disabled={loading || !selected}
                        >
                            {loading ? 'Submitting...' : 'Submit Rating'}
                        </button>

                        <Button style="blackbtn" text="Skip for now" />
                    </div>

                    {error && <p className="rating-error">{error}</p>}
                </div>
            </main>
        </>
    );
};

export default Rating;