import React, { Component } from 'react'

export default class CurrencyConverter extends Component {
    state = {
        rubAmount: 0,
        rate: 57,
    }

    componentDidMount() {
        this.loadActualRate();
    }

    loadActualRate = () => {
        fetch(process.env.REACT_APP_CURRENCY_URL)
            .then(response => response.json())
            .then(rates => {
                const findUSD = rate => rate.code === 'USD';
                const rate = rates.find(findUSD).value;
                this.setState({ rate })
            })
    }

    handleAmountChange = event => {
        this.setState({ rubAmount: event.target.value });
    }

    calcUSDsum = () => {
        const { rubAmount, rate } = this.state;
        return (rubAmount / rate).toFixed(4);
    }

    render() {
        const { rubAmount, rate } = this.state;
        return (
            <div>
                <h3>Конвертер валют:</h3>
                <div>Текущий курс: {rate}</div>
                <div>
                    <span>Сумма в рублях: </span>
                    <input
                        type="text"
                        placeholder="Сумма в рублях"
                        onChange={this.handleAmountChange}
                        value={rubAmount} />
                </div>
                <span>Сумма в долларах: {this.calcUSDsum()}</span>
            </div>
        );
    }
}
