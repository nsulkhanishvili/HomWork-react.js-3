export default function Buatton ({ text, type, onClick, customClass}) {
    return(
        <button 
         onClick={onClick}
         type={type}
         className={`Button ${customClass ? customClass : ""}`}
        >
            {text}
            
        </button>
    )
}
