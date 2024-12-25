// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

type TodoCardProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: string;
};

const TodoContainer = () => {
  const [priority, setPriority] = useState<string>("");
  // const { todos } = useAppSelector((state) => state.todos);
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  // console.log("todos", todos);

  return (
    <div className=" mx-1 lg:mx-0">
      <div className="flex justify-between items-center mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full rounded-lg  h-full p-[2px]">
        {/* <div className="bg-neutral-100 text-black flex justify-center items-center w-full text-lg font-bold py-2 rounded-md">
          <p>There is no task pending !!!</p>
        </div> */}
        <div className="bg-neutral-100 p-3  space-y-3 rounded-lg">
          {isLoading ? (
            <div className="text-center text-red-600 text-sm font-bold animate-pulse">
              Loading...
            </div>
          ) : (
            todos?.data?.map((item: TodoCardProps) => (
              <TodoCard key={item._id} {...item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
