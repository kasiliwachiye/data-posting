import React, { Component } from 'react'

class Postform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <h1>Help grow the Rain Forest</h1>
                <form>
                    <div className="form-group">
                        <label>Canopy</label>
                        <br></br>
                        <input type="text" className="form-control" name='title' value={this.state.title} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Undergrowth</label>
                        <br></br>
                        <textarea className="form-control" rows="3" name='body' value={this.state.body} onChange={this.onChange}></textarea>
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Plant</button>
                </form>
            </div>
        )
    }
}

export default Postform;
