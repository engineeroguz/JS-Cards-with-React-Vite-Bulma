function Cards(props) {
  const { title, description, images } = props;
  return (
    <>
      <div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-1by1">
              <img
                src={images}
                alt="JavaScript and His Frameworks"
                width={"%50"}
                height={"%50"}
                style={{ float: "center" }}
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{title}</p>
              </div>
            </div>

            <div class="content">
              {description}
              <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
