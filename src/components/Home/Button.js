import './styles/home.css'

export const Button = () => {
    return (
        <>
            <button className="btn">Learn more
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 32 32"
                    fill="none">
                    <path
                        d="M5 16h22M18 7l9 9-9 9"
                        stroke="#000"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                </svg> 
            </button>
        </>
    );
}