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
      ],
      errors: [
        {
          point: "DatePickerで選んだ日付が'Invalid Date'と表示される",
          description: "Taskのdateを保存する値を文字列とオブジェクトで混合してしまいバグが起きた",
          solution: "DatePickerにはstate管理したDateオブジェクトを、Taskオブジェクトには文字列化した日付を保存するようにした",
        }
      ],
      futurePlans: [
        {
          point: "DBを追加し、ログインを可能にする",
          point: "DBを追加し、ログインを可能にする",
        }
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
    <div className='md:flex'>
      <>
        {works.map((work, idx) => (
          <div key={idx} className="w-full md:w-1/2 p-6">
            <motion.div
              variants={childVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            >
              <Image
                src={work.img}
                alt={work.title}
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{work.explanation}</p>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleOpenModal(work)}
                >
                  詳細を見る
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </>


      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="fixed inset-0 bg-black/50 z-50" // 背景の半透明
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-white p-6 rounded-xl shadow-lg z-50 outline-none overflow-y-auto"
      >
        <button onClick={handleCloseModal} className="float-right text-xl">×</button>
        <h2 className="text-2xl text-center font-bold mb-2">{selectedWork?.title}</h2>
        <Image src={selectedWork?.img} alt={selectedWork?.title} width={500} height={300} className="rounded mb-4" />
        <p className="mb-4">{selectedWork?.explanation}</p>

        {selectedWork?.functionalities?.length > 0 && (
          <details className="mb-4 p-2 border rounded">
            <summary className="font-semibold cursor-pointer">機能</summary>
            <ul className="list-disc pl-5 mt-2">
              {selectedWork.functionalities.map((func, idx) => (
                <li key={idx}>{func}</li>
              ))}
            </ul>
          </details>
        )}

        {selectedWork?.features?.length > 0 && (
          <details className="mb-4 p-2 border rounded">
            <summary className="font-semibold cursor-pointer">工夫したところ</summary>
            <div className="mt-2">
              {selectedWork.features.map((feature, idx) => (
                <div key={idx} className="mb-2">
                  <p className="font-semibold">{feature.point}</p>
                  <p className="text-gray-500">{feature.reason}</p>
                  {feature.code && (
                    <pre className="bg-gray-800 text-white p-2 rounded overflow-x-auto">
                      {feature.code.replace(/```jsx/g, "").replace(/```/g, "")}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </details>
        )}

        {selectedWork?.errors?.length > 0 && (
          <details className="mb-4 p-2 border rounded">
            <summary className="font-semibold cursor-pointer">エラーと解決法</summary>
            <p className="mt-2">
              {selectedWork.errors.map((error, idx) => (
                <div key={idx} className="mb-2">
                  <p className="font-semibold">{error.point}</p>
                  <p className="text-gray-500">{error.description}</p>
                  <p className="text-gray-500 bg-amber-300">{error.solution}</p>
                </div>
              ))}

            </p>
          </details>
        )}

        {selectedWork?.futurePlans?.length > 0 && (
          <details className="mb-4 p-2 border rounded">
            <summary className="font-semibold cursor-pointer">今後の改善予定</summary>
            <p className="mt-2">

              <ul className="list-disc pl-5 mt-2">
                {selectedWork.futurePlans.map((plan, idx) => (
                  <li key={idx}>{plan.point}</li>
                ))}
              </ul>
            </p>
          </details>
        )}

      </ReactModal >
    </div>
  );
}
