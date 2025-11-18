// Works.jsx
import { motion } from 'motion/react';
import { childVariants } from "@/components/Scroll"
import { useState } from 'react';
import styles from "@/components/Works.module.css"
import Image from 'next/image';
import ReactModal from 'react-modal';


export function Works() {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    {
      title: "Simple Todo-App",
      img: "/face.jpg",
      explanation: "直感的に操作できる、ダークモード対応のTodoアプリです。",
      functionalities: ["タスクの追加", "タスクの削除", "タスクの編集", "完了チェック", "Today/Upcomingタスクのページ切り替え", "ダークモード対応"],
      features: [
        {
          point: "完了チェックのUIを表示してから3秒後にフェードアウト",
          gif: "",
          reason: "遅延がないとチェックを押したかどうかわかりづらいため。",
          code: `\`\`\`jsx
          const [isFading, setIsFading] = useState(false);
          const handleToggle = () => {
          // フェードアウト開始
            if (!task.completed) {
              setIsFading(true);
              // 3秒後に実際のトグル処理
              setTimeout(() => toggleTask(task.id), 3000);
            } else {
            // 未完了に戻すときは即時
              toggleTask(task.id);
            }
          };
          .
          .
          return (
          . 
          . 
            <input
              type="checkbox"
              className={style.todoCheckbox}
              checked={task.completed || isFading} // フェードアウト中はチェック済みに見せる
              onChange={handleToggle}
            />
          . 
          . 
          )
          \`\`\``
        },
        {
          point: "Today/Upcomingボタンを右上部に配置",
          gif: "",
          reason: "頻繁にアクセスするため右手側（右利き）に配置、下部でない理由はブラウザの検索ボックスと被らないようにするためです。",
          code: ""
        },
        {
          point: "期限切れタスクはTodayページに赤字で表示",
          gif: "",
          reason: "期限切れタスクは一番優先度が高いはずなので、目につきやすいTodayページに赤字で表示させました。「TodoList」コンポーネントを作り、それぞれ「today」「expired」「upcoming」に分けて、stateで管理している大元のTodoリストをフィルタリングしています。",
          code: `\`\`\`jsx
            let filteredTodoList;
            const today = new Date().toISOString().split("T")[0];

            if (filterType === "today") {
              filteredTodoList = todoList.filter((todo) => todo.date === today && !todo.completed);
            } else if (filterType === "upcoming") {
                filteredTodoList = todoList.filter((todo) => todo.date > today && !todo.completed);
              } else if (filterType === "expired") {
                  filteredTodoList = todoList.filter((todo) => todo.date < today && !todo.completed);
                } else {
                  filteredTodoList = todoList;
                }

                return (
                  <div className="flex justify-center items-start w-full mt-2">
                    <ul className="w-4/5 max-w-[500px] list-none">
                      <ListMessage
                        todoList={todoList}
                        page={page}
                        filteredTodoList={filteredTodoList}
                        filterType={filterType}
                      />
                      {filteredTodoList.map(task => (
                        <TodoItem
                          key={task.id}
                          task={task}
                          toggleTask={toggleTask}
                          deleteTask={deleteTask}
                          editTask={editTask}
                        />
                      ))}
                    </ul>
                  </div>
                );
            \`\`\``
        },
      ]
    },

    { title: "GeoYama", img: "/face.jpg" },
  ]


  const handleOpenModal = (work) => {
    setSelectedWork(work);
    setIsOpen(true);
  };


  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedWork(null);
  }

  return (
    <>
      <motion.div variants={childVariants} className="w-30 h-30 bg-amber-400" onClick={() => handleOpenModal(works[0])}>
      </motion.div>
      <motion.div variants={childVariants} className="w-30 h-30 bg-amber-400" onClick={() => handleOpenModal(works[0])}></motion.div>

      <ReactModal
        isOpen={isOpen}
        style={{
          overlay: {
            backgroundColor: "grey"
          }
        }}

      >
        <div>
          <button onClick={handleCloseModal}>× Close</button>
          <p className='text-center text-2xl mb-4'>{selectedWork?.title}</p>
          <p className='text-center'>{selectedWork?.explanation}</p>
          <Image src="/face.jpg" alt="Work image" width={500} height={300} />
        </div>

        <div className='border mt-4'>
          {selectedWork?.functionalities?.length > 0 ? (
            <>
              <p className={styles.contentTitle}>機能</p>
              <ul>
                {selectedWork.functionalities.map((func, idx) => (
                  <li key={idx}>
                    {func}
                  </li>
                ))}
              </ul></>
          ) : null}

          {selectedWork?.features?.map((feature, idx) => (
            <div key={idx}>
              <p className={styles.contentTitle}>工夫したところ<span className='text-2xl'>{idx + 1}</span></p>
              <p>{feature.point}</p>
              <p className={styles.contentTitle}>理由</p>
              <p>{feature.reason}</p>
              {feature.code && (
                <pre className="bg-gray-800 text-white p-2 rounded overflow-x-auto">
                  {feature.code.replace(/```jsx/g, "").replace(/```/g, "")}
                </pre>
              )}
            </div>
          ))}
        </div>
      </ReactModal >
    </>
  );
}
