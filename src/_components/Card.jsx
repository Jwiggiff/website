export default function Card({ title, description, image, url }) {
  return (
    <li>
      <a href={url} target="_blank">
        <div className="card" style={{ "--bg-img": `url(${image})` }}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
}
