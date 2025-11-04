# memo

`useMemo()`

```tsx
import { useState, useMemo } from "react"

export default function () {
  const [studentLen, setStudentLen] = useState(0);
  const [teacherLen, setTeacherLen] = useState(0);

  const allLen = useMemo(() => {
    return studentLen + teacherLen;
  }, [studentLen, teacherLen])


  return (
    <div>
      <div>{studentLen}</div>
      <div> {teacherLen} </div>
      <div>{allLen}</div>
      <button onClick={() => setStudentLen(studentLen + 1)}>add student</button>
      <button onClick={() => setTeacherLen(teacherLen + 1)}>add teacher</button>
    </div>
  )
}
```
