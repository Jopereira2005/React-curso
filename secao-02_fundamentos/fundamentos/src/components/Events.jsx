const Events = () => {
    const handleMyEnvent = (e) => {
        console.log(e)
        console.log('Você clicou no botão');
    }

    const renderSomenthing = (x) => {
        if(x) {
            return <h3>Volta isso</h3>

        } else {
            return <h3>Ou isso</h3>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEnvent}>clique aqui!</button>
            </div>

            <div>
                <button onClick={() => console.log('Você clicou nesse botão também')}>
                    Clique aqui também
                </button>            
            </div>

            <div>
                <button onClick={() => {
                    if(true) {
                        console.log("Você clicou nesse botão, valeu");
                    }
                }}>Clica nesse botão na moral</button>
            </div>

            <div>{ renderSomenthing(true) }</div>
            <div>{ renderSomenthing(false) }</div>
        </div>
    )
}

export default Events