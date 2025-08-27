function Item({ skill }) {
  return (
    <div className="flex justify-between items-center p-1 rounded-md bg-violet-950">
      <div className="flex justify-start items-center gap-2 h-full w-fit">
        {skill.icon}
        <span>{skill.name}</span>
      </div>
      <div className="flex justify-end items-center gap-0.5 h-full w-fit">
        {skill.level}
      </div>
    </div>
  );
}

export default Item;
