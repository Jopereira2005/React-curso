const Challenge = () => {
    const valor_1 = 5;
    const valor_2 = 5;

    return (
        <div>
            <div>
                <h1>Desafio :)</h1>
                <h2>Primeiro valor aleatorio: { valor_1 }</h2>
                <h2>Segundo valor aleatorio: { valor_2 }</h2>
                <div>
                    <button onClick={ console.log(valor_1 + valor_2) }>Soma</button>
                </div>
            </div>
        </div>
    )

}

export default Challenge