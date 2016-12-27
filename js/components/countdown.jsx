import React from "react";
import classNames from "classnames";

export class Countdown extends React.Component {

  static propTypes = {
    date: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    date: new Date()
  };

  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className={classNames("neal-countdown", this.props.className)}>
        <span className="countdown-col">
          <span className="countdown-col-element">
            <strong className="countdown-col-element-number">{this.addLeadingZeros(countDown.days)}</strong>
            <span className="countdown-col-element-text">{countDown.days === 1 ? 'Day' : 'Days'}</span>
          </span>
        </span>

        <span className="countdown-col">
          <span className="countdown-col-element">
            <strong className="countdown-col-element-number">{this.addLeadingZeros(countDown.hours)}</strong>
            <span className="countdown-col-element-text">Hours</span>
          </span>
        </span>


        <span className="countdown-col">
          <span className="countdown-col-element">
            <strong className="countdown-col-element-number">{this.addLeadingZeros(countDown.min)}</strong>
            <span className="countdown-col-element-text">Min</span>
          </span>
        </span>

        <span className="countdown-col">
          <span className="countdown-col-element">
            <strong className="countdown-col-element-number">{this.addLeadingZeros(countDown.sec)}</strong>
            <span className="countdown-col-element-text">Sec</span>
          </span>
        </span>
      </div>
    );
  }
}
