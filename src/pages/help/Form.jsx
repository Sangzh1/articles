function Form() {
  return (
    <>
      <h1 className='txt size-6'>Send Us Question</h1>
      <hr />
      <div className='form-container '>
        <form>
          <label className='form-control bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
            <span>Your Email:</span>
            <input type='text' />
          </label>
          <label className='form-control'>
            <span>Your Question:</span>
            <textarea></textarea>
          </label>
          <button className='btn btn-neutral'>Send</button>
        </form>
      </div>
    </>
  );
}

export default Form;
