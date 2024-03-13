import './Button.css';

export function Button(props) {
    const {text, style} = props;
    return <button className='Button' {...props}>
        {text}
    </button>
}