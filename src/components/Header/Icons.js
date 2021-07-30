import './styles/header.css'

export const Icons = () => {
    return (
        <>
            <ul className="icons">
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 32 32"
                        fill="none"
                        >
                        <path
                            d="M14.5 25C20.299 25 25 20.299 25 14.5S20.299 4 14.5 4 4 8.701 4 14.5 8.701 25 14.5 25zM21.924 21.925L28 28"
                            stroke="#000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </li>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 32 32"
                        fill="none"
                        >
                        <path
                            d="M16.707 26.485l10.13-10.129c2.488-2.489 2.855-6.583.5-9.199a6.501 6.501 0 00-9.433-.253L16 8.808l-1.644-1.644c-2.489-2.489-6.583-2.856-9.199-.5a6.5 6.5 0 00-.253 9.432l10.389 10.39a1 1 0 001.414 0v0z"
                            stroke="#000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>0</span>
                </li>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 32 32"
                        fill="none"
                        >
                        <path
                            d="M10 29a2 2 0 100-4 2 2 0 000 4zM23 29a2 2 0 100-4 2 2 0 000 4z"
                            fill="#000"
                        />
                        <path
                            d="M5.286 9h22.428l-3.3 11.55A2 2 0 0122.491 22H10.51a2 2 0 01-1.923-1.45L4.064 4.724A1 1 0 003.103 4H1"
                            stroke="#000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>12</span>
                </li>
            </ul>
        </>
    );
}