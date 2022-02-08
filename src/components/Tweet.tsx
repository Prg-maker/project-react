type TweetProps = {
  title: string 
}

export function Tweet(props : TweetProps){
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  ) 
}