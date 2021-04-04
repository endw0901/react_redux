const EventComponent: React.FC = () => {
  // type stand alone event handler
  // type inferenceはinputタグ内でしか機能しないため、ここのeはany扱い
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // ChangeEvent:テキスト入力、ラジオボタン選択など
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
