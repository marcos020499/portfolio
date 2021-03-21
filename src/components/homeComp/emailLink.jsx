import React, { useState, useEffect, useRef } from 'react';

// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  'hi everyone',
  'hello, hello',
  'hola a todos',
  'welcome to my page',
  'this is my resume',
  'you.can.also.email.me.with.specific.topics.like',
  'just-saying-hi',
  'please-work-for-us',
  `thank's for visit my web site`,
  'thanks',
  `I'm a mexican friend`
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const EmailLink = () => {
  const hold = 55; // ticks to wait after message is complete before rendering next message
  const delay = 55; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      setIsActive(false);
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
    <div
      className="inline-container"
      style={validateText(message) ? {} : { color: 'red' , marginTop: '7%', textAlign: 'center'}}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
    >
      <a className='effectEmail' href={validateText(message) ? `mailto:${message}@marcosmanzo.com` : ''}>
        <span>{message}</span>
        <span>@marcosmanzo.com</span>
      </a>
    </div>
  );
};

export default EmailLink;