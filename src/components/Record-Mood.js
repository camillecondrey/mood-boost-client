import React, { Component } from 'react';

import NavRecord from './Nav-Record';

export class RecordMood extends Component {
  render() {
    return (
        <container>
            <NavRecord />
        <section>
            <h2>Record Mood</h2>
            <form id="record-mood">
                <div class="form-section">
                    <label for="date">When were you in this mood?</label>
                    <input type="number" name="date-month" class="date-month" placeholder="01" min="1" max="12" required=""/>  .
                    <input type="number" name="date-day" class="date-day" placeholder="01" min="1" max="31" required=""/>  .
                    <input type="number" name="date-year" class="date-year" placeholder="2017" min="2016" max="2017"/>
                </div>
                <div class="form-section">
                    <label for="mood-title">How would you describe your mood?</label>
                    <input type="text" name="mood-title" placeholder="Example: Angry" required/>
                </div>
                <div class="form-section">
                    <label for="cause">Do you know what caused you to feel this way?</label>
                    <input type="text" name="cause" placeholder="Example: I got a speeding ticket" required/>
                </div>
                <div class="form-section">
                    <label for="mood-length">How long did this mood last?</label>
                    <input type="text" name="mood-length" placeholder="Example: 2 hours" required/>
                </div>
                <button>Submit</button>
            </form>
        </section>
        </container>
    )
  }
}

export default RecordMood;

