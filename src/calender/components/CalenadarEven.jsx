
export const CalenadarEven = ({event}) => {
    const {title, user} = event
  return (
    <>
        <strong> {title} </strong>
        <br />
        <span> -{user?.name}</span>
    </>
  )
}
