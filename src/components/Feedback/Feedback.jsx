import { Component } from "react";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        percent: 0,
      }

      addFeedback = ({target: {dataset: {name}}}) => {
        this.setState((pre) => ({
            [name]: pre[name] + 1,
            total: pre.total + 1,
        }))
      }


    render () {
        return (<div>
                <h1>Залишіть відгук</h1>
                <div>
                    <button data-name="good" type="button" onClick={this.addFeedback}>Добре</button>
                    <button data-name="neutral" type="button" onClick={this.addFeedback}>Нейтрально</button>
                    <button data-name="bad" type="button" onClick={this.addFeedback}>Погано</button>
                </div>

                {
                    this.state.total === 0 ? <h1>Відгуки ще не залишали</h1> : <>
                    <h2>Статистика</h2>
                    <div>
                        <p>Позитивні: {this.state.good}</p>
                        <p>Нейтральні: {this.state.neutral}</p>
                        <p>Негативні: {this.state.bad}</p>
                        <p>Відгуків загалом: {this.state.total}</p>
                        <p>Відсоток негативних відгуків {(this.state.good)/(this.state.total) * 100}%</p>
                    </div>
                    </>
                }

            </div>)
    }
}