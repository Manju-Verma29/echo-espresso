
export default function visitSection(title, image, children) {
  return (
    <>
    <section>
        <h1>{title}</h1>
        <div className="grid grid-2">
            <img src={image} alt="" />
        </div>
        <div>{children}</div>
    </section>
    </>
  )
}
