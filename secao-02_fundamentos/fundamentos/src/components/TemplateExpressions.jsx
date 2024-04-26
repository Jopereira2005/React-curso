import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
    const name = 'Paulo';
    const data = {
        age: 18,
        job: 'Programador'
    }

    return (
        <div>
            <h1>Olá meu nome é { name }.</h1>
            <h2>Tenho { data.age } anos.</h2>
            <h2>Trabalho como { data.job }.</h2>
            <h2>{ console.log("Salve") }</h2>
            <MyComponent/>
        </div>
    );
};

export default TemplateExpressions