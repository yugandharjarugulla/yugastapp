import { useParams, useNavigate }
 from 'react-router-dom';
const studentData = [
 { id: 1, name: 'Arjun', course: 'BCA',
 email: 'arjun@mail.com' },
 { id: 2, name: 'Priya', course: 'BSc',
 email: 'priya@mail.com' },
 { id: 3, name: 'Rahul', course: 'MCA',
 email: 'rahul@mail.com' },
];
export default function StudentDetail() {
 const { id } = useParams();
 const navigate = useNavigate();
 const student = studentData.find(
 (s) => s.id === parseInt(id)
 );
 if (!student) return <h2>Student Not Found</h2>;
 return (
 <div style={{ padding:'20px' }}>
 <h2>Student Detail</h2>
 <p><strong>Name:</strong> {student.name}</p>
 <p><strong>Course:</strong> {student.course}</p>
 <p><strong>Email:</strong> {student.email}</p>
 <button onClick={() => navigate('/students')}>
 Back to List
 </button>
 </div>
 );
}
