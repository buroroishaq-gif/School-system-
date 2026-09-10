/**
 * Smart School Management System - Demo Data & Storage Layer
 * Uses localStorage for persistence
 */

const DB = {
  KEYS: {
    students: 'ssms_students',
    teachers: 'ssms_teachers',
    parents: 'ssms_parents',
    staff: 'ssms_staff',
    classes: 'ssms_classes',
    sections: 'ssms_sections',
    subjects: 'ssms_subjects',
    attendance: 'ssms_attendance',
    teacherAttendance: 'ssms_teacher_attendance',
    fees: 'ssms_fees',
    feePayments: 'ssms_fee_payments',
    exams: 'ssms_exams',
    results: 'ssms_results',
    timetable: 'ssms_timetable',
    homework: 'ssms_homework',
    notices: 'ssms_notices',
    books: 'ssms_books',
    bookIssues: 'ssms_book_issues',
    vehicles: 'ssms_vehicles',
    salaries: 'ssms_salaries',
    notifications: 'ssms_notifications',
    settings: 'ssms_settings',
    users: 'ssms_users',
    currentUser: 'ssms_current_user'
  },

  get(key) {
    try {
      const data = localStorage.getItem(this.KEYS[key] || key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  set(key, value) {
    localStorage.setItem(this.KEYS[key] || key, JSON.stringify(value));
  },

  init() {
    if (!this.get('settings')) {
      this.set('settings', {
        schoolName: 'Smart School Management System',
        schoolLogo: '',
        address: '123 Education Avenue, Knowledge City',
        phone: '+92 300 1234567',
        email: 'info@smartschool.edu',
        website: 'www.smartschool.edu',
        principalName: 'Dr. Ayesha Khan',
        academicSession: '2025-2026',
        currency: 'PKR',
        timezone: 'Asia/Karachi'
      });
    }

    if (!this.get('users')) {
      this.set('users', [
        { id: 1, username: 'admin', password: 'admin123', role: 'admin', name: 'System Administrator', email: 'admin@smartschool.edu' },
        { id: 2, username: 'teacher', password: 'teacher123', role: 'teacher', name: 'Ali Raza', email: 'ali.raza@smartschool.edu', teacherId: 'T001' },
        { id: 3, username: 'student', password: 'student123', role: 'student', name: 'Hassan Ahmed', email: 'hassan@student.smartschool.edu', studentId: 'S001' },
        { id: 4, username: 'parent', password: 'parent123', role: 'parent', name: 'Muhammad Ahmed', email: 'parent@smartschool.edu', parentId: 'P001' },
        { id: 5, username: 'accountant', password: 'account123', role: 'accountant', name: 'Sara Malik', email: 'sara@smartschool.edu' }
      ]);
    }

    if (!this.get('classes')) {
      this.set('classes', [
        { id: 1, name: 'Nursery', sections: ['A', 'B'] },
        { id: 2, name: 'KG', sections: ['A', 'B'] },
        { id: 3, name: 'Grade 1', sections: ['A', 'B', 'C'] },
        { id: 4, name: 'Grade 2', sections: ['A', 'B'] },
        { id: 5, name: 'Grade 3', sections: ['A', 'B'] },
        { id: 6, name: 'Grade 4', sections: ['A', 'B'] },
        { id: 7, name: 'Grade 5', sections: ['A', 'B'] },
        { id: 8, name: 'Grade 6', sections: ['A', 'B'] },
        { id: 9, name: 'Grade 7', sections: ['A', 'B'] },
        { id: 10, name: 'Grade 8', sections: ['A', 'B'] },
        { id: 11, name: 'Grade 9', sections: ['A', 'B', 'C'] },
        { id: 12, name: 'Grade 10', sections: ['A', 'B'] }
      ]);
    }

    if (!this.get('subjects')) {
      this.set('subjects', [
        { id: 1, name: 'English', code: 'ENG' },
        { id: 2, name: 'Urdu', code: 'URD' },
        { id: 3, name: 'Mathematics', code: 'MATH' },
        { id: 4, name: 'Science', code: 'SCI' },
        { id: 5, name: 'Social Studies', code: 'SST' },
        { id: 6, name: 'Islamic Studies', code: 'ISL' },
        { id: 7, name: 'Computer Science', code: 'CS' },
        { id: 8, name: 'Physics', code: 'PHY' },
        { id: 9, name: 'Chemistry', code: 'CHEM' },
        { id: 10, name: 'Biology', code: 'BIO' }
      ]);
    }

    if (!this.get('students')) {
      this.set('students', [
        { id: 'S001', name: 'Hassan Ahmed', fatherName: 'Muhammad Ahmed', motherName: 'Fatima Ahmed', dob: '2012-05-15', gender: 'Male', cnic: '35202-1234567-1', mobile: '0300-1112233', email: 'hassan@email.com', address: 'House 12, Street 5, Gulberg', city: 'Lahore', className: 'Grade 8', section: 'A', rollNo: '08', admissionDate: '2020-04-01', previousSchool: 'City Public School', bloodGroup: 'B+', photo: '', parentName: 'Muhammad Ahmed', parentContact: '0300-9876543', status: 'Active' },
        { id: 'S002', name: 'Ayesha Khan', fatherName: 'Imran Khan', motherName: 'Sana Khan', dob: '2013-08-22', gender: 'Female', cnic: '35202-2345678-2', mobile: '0301-2223344', email: 'ayesha@email.com', address: 'Flat 4B, Model Town', city: 'Lahore', className: 'Grade 7', section: 'B', rollNo: '12', admissionDate: '2021-03-15', previousSchool: '', bloodGroup: 'A+', photo: '', parentName: 'Imran Khan', parentContact: '0301-8765432', status: 'Active' },
        { id: 'S003', name: 'Bilal Hussain', fatherName: 'Tariq Hussain', motherName: 'Nadia Hussain', dob: '2011-11-03', gender: 'Male', cnic: '35202-3456789-3', mobile: '0302-3334455', email: 'bilal@email.com', address: '45 Canal Road', city: 'Lahore', className: 'Grade 9', section: 'A', rollNo: '05', admissionDate: '2019-04-10', previousSchool: 'Beacon House', bloodGroup: 'O+', photo: '', parentName: 'Tariq Hussain', parentContact: '0302-7654321', status: 'Active' },
        { id: 'S004', name: 'Zainab Ali', fatherName: 'Asif Ali', motherName: 'Rabia Ali', dob: '2014-02-18', gender: 'Female', cnic: '35202-4567890-4', mobile: '0303-4445566', email: 'zainab@email.com', address: '78 Johar Town', city: 'Lahore', className: 'Grade 5', section: 'A', rollNo: '03', admissionDate: '2022-04-01', previousSchool: '', bloodGroup: 'AB+', photo: '', parentName: 'Asif Ali', parentContact: '0303-6543210', status: 'Active' },
        { id: 'S005', name: 'Omar Farooq', fatherName: 'Khalid Farooq', motherName: 'Saima Farooq', dob: '2010-07-30', gender: 'Male', cnic: '35202-5678901-5', mobile: '0304-5556677', email: 'omar@email.com', address: '12 DHA Phase 5', city: 'Lahore', className: 'Grade 10', section: 'B', rollNo: '01', admissionDate: '2018-04-01', previousSchool: 'LGS', bloodGroup: 'B-', photo: '', parentName: 'Khalid Farooq', parentContact: '0304-5432109', status: 'Active' },
        { id: 'S006', name: 'Fatima Zahra', fatherName: 'Ahmed Raza', motherName: 'Maryam Raza', dob: '2013-01-12', gender: 'Female', cnic: '35202-6789012-6', mobile: '0305-6667788', email: 'fatima@email.com', address: '90 Faisal Town', city: 'Lahore', className: 'Grade 6', section: 'A', rollNo: '07', admissionDate: '2021-04-01', previousSchool: '', bloodGroup: 'A-', photo: '', parentName: 'Ahmed Raza', parentContact: '0305-4321098', status: 'Active' },
        { id: 'S007', name: 'Usman Ghani', fatherName: 'Naveed Ghani', motherName: 'Hina Ghani', dob: '2012-09-25', gender: 'Male', cnic: '35202-7890123-7', mobile: '0306-7778899', email: 'usman@email.com', address: '34 Garden Town', city: 'Lahore', className: 'Grade 8', section: 'B', rollNo: '15', admissionDate: '2020-04-01', previousSchool: 'The Educators', bloodGroup: 'O-', photo: '', parentName: 'Naveed Ghani', parentContact: '0306-3210987', status: 'Active' },
        { id: 'S008', name: 'Sanaullah', fatherName: 'Rashid Ahmed', motherName: 'Bushra Ahmed', dob: '2015-04-08', gender: 'Male', cnic: '35202-8901234-8', mobile: '0307-8889900', email: 'sana@email.com', address: '56 Iqbal Town', city: 'Lahore', className: 'Grade 3', section: 'A', rollNo: '09', admissionDate: '2023-04-01', previousSchool: '', bloodGroup: 'B+', photo: '', parentName: 'Rashid Ahmed', parentContact: '0307-2109876', status: 'Active' }
      ]);
    }

    if (!this.get('teachers')) {
      this.set('teachers', [
        { id: 'T001', name: 'Ali Raza', fatherName: 'Muhammad Raza', cnic: '35202-1111222-1', gender: 'Male', dob: '1985-03-12', mobile: '0300-1110001', email: 'ali.raza@smartschool.edu', address: '15 Model Town, Lahore', qualification: 'M.Sc Mathematics', subject: 'Mathematics', department: 'Science', designation: 'Senior Teacher', joiningDate: '2015-08-01', salary: 75000, photo: '', status: 'Active' },
        { id: 'T002', name: 'Sara Bano', fatherName: 'Ahmed Bano', cnic: '35202-2222333-2', gender: 'Female', dob: '1988-07-20', mobile: '0301-2220002', email: 'sara.bano@smartschool.edu', address: '22 Gulberg, Lahore', qualification: 'MA English', subject: 'English', department: 'Languages', designation: 'Teacher', joiningDate: '2017-03-15', salary: 65000, photo: '', status: 'Active' },
        { id: 'T003', name: 'Imran Malik', fatherName: 'Tariq Malik', cnic: '35202-3333444-3', gender: 'Male', dob: '1982-11-05', mobile: '0302-3330003', email: 'imran.malik@smartschool.edu', address: '8 DHA Phase 3', qualification: 'M.Phil Physics', subject: 'Physics', department: 'Science', designation: 'HOD Science', joiningDate: '2012-09-01', salary: 95000, photo: '', status: 'Active' },
        { id: 'T004', name: 'Nadia Hussain', fatherName: 'Akhtar Hussain', cnic: '35202-4444555-4', gender: 'Female', dob: '1990-01-30', mobile: '0303-4440004', email: 'nadia.hussain@smartschool.edu', address: '45 Johar Town', qualification: 'B.Ed, MA Urdu', subject: 'Urdu', department: 'Languages', designation: 'Teacher', joiningDate: '2018-04-01', salary: 58000, photo: '', status: 'Active' },
        { id: 'T005', name: 'Kamran Sheikh', fatherName: 'Yousuf Sheikh', cnic: '35202-5555666-5', gender: 'Male', dob: '1987-05-18', mobile: '0304-5550005', email: 'kamran.sheikh@smartschool.edu', address: '67 Faisal Town', qualification: 'MCS', subject: 'Computer Science', department: 'IT', designation: 'IT Teacher', joiningDate: '2016-01-10', salary: 70000, photo: '', status: 'Active' }
      ]);
    }

    if (!this.get('parents')) {
      this.set('parents', [
        { id: 'P001', fatherName: 'Muhammad Ahmed', motherName: 'Fatima Ahmed', cnic: '35202-9876543-1', mobile: '0300-9876543', email: 'parent@smartschool.edu', address: 'House 12, Street 5, Gulberg, Lahore', occupation: 'Businessman', children: ['S001'] },
        { id: 'P002', fatherName: 'Imran Khan', motherName: 'Sana Khan', cnic: '35202-8765432-2', mobile: '0301-8765432', email: 'imran.parent@email.com', address: 'Flat 4B, Model Town', occupation: 'Engineer', children: ['S002'] },
        { id: 'P003', fatherName: 'Tariq Hussain', motherName: 'Nadia Hussain', cnic: '35202-7654321-3', mobile: '0302-7654321', email: 'tariq.parent@email.com', address: '45 Canal Road', occupation: 'Doctor', children: ['S003'] }
      ]);
    }

    if (!this.get('staff')) {
      this.set('staff', [
        { id: 'E001', name: 'Sara Malik', fatherName: 'Malik Ahmed', cnic: '35202-1212121-1', mobile: '0300-1212121', address: 'Lahore', designation: 'Accountant', department: 'Accounts', joiningDate: '2019-01-15', salary: 55000, photo: '', status: 'Active' },
        { id: 'E002', name: 'Rashid Khan', fatherName: 'Khan Sahib', cnic: '35202-1313131-2', mobile: '0301-1313131', address: 'Lahore', designation: 'Librarian', department: 'Library', joiningDate: '2018-06-01', salary: 45000, photo: '', status: 'Active' },
        { id: 'E003', name: 'Javed Iqbal', fatherName: 'Iqbal Ahmed', cnic: '35202-1414141-3', mobile: '0302-1414141', address: 'Lahore', designation: 'Driver', department: 'Transport', joiningDate: '2020-03-01', salary: 35000, photo: '', status: 'Active' },
        { id: 'E004', name: 'Amir Shah', fatherName: 'Shahid Shah', cnic: '35202-1515151-4', mobile: '0303-1515151', address: 'Lahore', designation: 'Security Guard', department: 'Security', joiningDate: '2021-01-10', salary: 30000, photo: '', status: 'Active' }
      ]);
    }

    if (!this.get('fees')) {
      this.set('fees', {
        admissionFee: 15000,
        monthlyFee: 8000,
        examFee: 2500,
        transportFee: 3000,
        libraryFee: 500,
        otherFee: 1000
      });
    }

    if (!this.get('feePayments')) {
      this.set('feePayments', [
        { id: 'FP001', studentId: 'S001', studentName: 'Hassan Ahmed', className: 'Grade 8', feeMonth: 'August 2025', feeType: 'Monthly Fee', amount: 8000, discount: 0, fine: 0, total: 8000, paid: 8000, remaining: 0, paymentDate: '2025-08-05', method: 'Cash', receiptNo: 'RCPT-2025-001' },
        { id: 'FP002', studentId: 'S002', studentName: 'Ayesha Khan', className: 'Grade 7', feeMonth: 'August 2025', feeType: 'Monthly Fee', amount: 8000, discount: 500, fine: 0, total: 7500, paid: 7500, remaining: 0, paymentDate: '2025-08-06', method: 'Bank Transfer', receiptNo: 'RCPT-2025-002' },
        { id: 'FP003', studentId: 'S003', studentName: 'Bilal Hussain', className: 'Grade 9', feeMonth: 'August 2025', feeType: 'Monthly Fee', amount: 8000, discount: 0, fine: 200, total: 8200, paid: 5000, remaining: 3200, paymentDate: '2025-08-10', method: 'Cash', receiptNo: 'RCPT-2025-003' },
        { id: 'FP004', studentId: 'S005', studentName: 'Omar Farooq', className: 'Grade 10', feeMonth: 'July 2025', feeType: 'Monthly Fee', amount: 8000, discount: 0, fine: 0, total: 8000, paid: 8000, remaining: 0, paymentDate: '2025-07-08', method: 'Online Payment', receiptNo: 'RCPT-2025-004' }
      ]);
    }

    if (!this.get('attendance')) {
      const today = new Date().toISOString().slice(0, 10);
      this.set('attendance', [
        { date: today, className: 'Grade 8', section: 'A', records: [
          { studentId: 'S001', status: 'Present' },
          { studentId: 'S007', status: 'Present' }
        ]},
        { date: today, className: 'Grade 7', section: 'B', records: [
          { studentId: 'S002', status: 'Present' }
        ]}
      ]);
    }

    if (!this.get('exams')) {
      this.set('exams', [
        { id: 'EX001', name: 'Mid Term Exam 2025', startDate: '2025-10-15', endDate: '2025-10-25', classes: ['Grade 8', 'Grade 9', 'Grade 10'], status: 'Scheduled' },
        { id: 'EX002', name: 'Final Term Exam 2025', startDate: '2026-03-01', endDate: '2026-03-15', classes: ['All'], status: 'Upcoming' }
      ]);
    }

    if (!this.get('results')) {
      this.set('results', [
        { id: 'RES001', studentId: 'S001', examId: 'EX001', examName: 'Mid Term Exam 2025', className: 'Grade 8', section: 'A', subjects: [
          { name: 'English', total: 100, obtained: 85 },
          { name: 'Mathematics', total: 100, obtained: 92 },
          { name: 'Science', total: 100, obtained: 78 },
          { name: 'Urdu', total: 100, obtained: 88 },
          { name: 'Islamic Studies', total: 50, obtained: 45 }
        ], totalMarks: 450, obtainedMarks: 388, percentage: 86.22, grade: 'A', position: 2, remarks: 'Excellent performance. Keep it up!', status: 'Published' }
      ]);
    }

    if (!this.get('homework')) {
      this.set('homework', [
        { id: 'HW001', className: 'Grade 8', section: 'A', subject: 'Mathematics', title: 'Algebra Chapter 5 Exercises', description: 'Complete exercises 5.1 to 5.4 from textbook.', dueDate: '2025-09-15', teacher: 'Ali Raza', attachment: '', createdAt: '2025-09-08' },
        { id: 'HW002', className: 'Grade 7', section: 'B', subject: 'English', title: 'Essay Writing', description: 'Write a 300-word essay on "My Favorite Book".', dueDate: '2025-09-12', teacher: 'Sara Bano', attachment: '', createdAt: '2025-09-07' }
      ]);
    }

    if (!this.get('notices')) {
      this.set('notices', [
        { id: 'N001', title: 'Mid Term Exam Schedule Released', description: 'The schedule for Mid Term Examinations has been published. Please check the examination section.', date: '2025-09-05', audience: 'All', attachment: '', createdBy: 'Admin' },
        { id: 'N002', title: 'School Holiday - Independence Day', description: 'School will remain closed on 14th August for Independence Day celebrations.', date: '2025-08-10', audience: 'All', attachment: '', createdBy: 'Admin' },
        { id: 'N003', title: 'Fee Reminder - September', description: 'Parents are requested to clear pending fees for the month of September by 10th.', date: '2025-09-01', audience: 'Parents', attachment: '', createdBy: 'Accountant' },
        { id: 'N004', title: 'Parent-Teacher Meeting', description: 'PTM scheduled for 20th September 2025. All parents are requested to attend.', date: '2025-09-08', audience: 'Parents', attachment: '', createdBy: 'Admin' }
      ]);
    }

    if (!this.get('books')) {
      this.set('books', [
        { id: 'B001', name: 'Mathematics Grade 8', author: 'Punjab Textbook Board', category: 'Textbook', isbn: '978-969-0-12345-1', quantity: 50, available: 42 },
        { id: 'B002', name: 'English Grammar & Composition', author: 'Wren & Martin', category: 'Reference', isbn: '978-0-123456-78-9', quantity: 20, available: 15 },
        { id: 'B003', name: 'Science for Class 7', author: 'Oxford University Press', category: 'Textbook', isbn: '978-0-19-123456-7', quantity: 40, available: 38 },
        { id: 'B004', name: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', isbn: '978-0-06-112241-5', quantity: 10, available: 7 }
      ]);
    }

    if (!this.get('bookIssues')) {
      this.set('bookIssues', [
        { id: 'BI001', bookId: 'B002', bookName: 'English Grammar & Composition', issuedTo: 'S001', issuedToName: 'Hassan Ahmed', type: 'Student', issueDate: '2025-09-01', returnDate: '2025-09-15', status: 'Issued', fine: 0 },
        { id: 'BI002', bookId: 'B004', bookName: 'The Alchemist', issuedTo: 'T002', issuedToName: 'Sara Bano', type: 'Teacher', issueDate: '2025-08-20', returnDate: '2025-09-20', status: 'Issued', fine: 0 }
      ]);
    }

    if (!this.get('vehicles')) {
      this.set('vehicles', [
        { id: 'V001', number: 'LHR-1234', driver: 'Javed Iqbal', driverContact: '0302-1414141', route: 'Route A - Gulberg to School', pickupPoints: ['Gulberg Main', 'Liberty Market', 'MM Alam Road'], capacity: 30, studentsAssigned: 22 },
        { id: 'V002', number: 'LHR-5678', driver: 'Asif Khan', driverContact: '0305-9998877', route: 'Route B - DHA to School', pickupPoints: ['DHA Phase 5', 'DHA Phase 6', 'Cantt'], capacity: 35, studentsAssigned: 28 }
      ]);
    }

    if (!this.get('timetable')) {
      this.set('timetable', [
        { className: 'Grade 8', section: 'A', day: 'Monday', periods: [
          { subject: 'Mathematics', teacher: 'Ali Raza', start: '08:00', end: '08:45', room: 'R-101' },
          { subject: 'English', teacher: 'Sara Bano', start: '08:45', end: '09:30', room: 'R-102' },
          { subject: 'Science', teacher: 'Imran Malik', start: '09:45', end: '10:30', room: 'Lab-1' },
          { subject: 'Urdu', teacher: 'Nadia Hussain', start: '10:30', end: '11:15', room: 'R-103' },
          { subject: 'Computer Science', teacher: 'Kamran Sheikh', start: '11:30', end: '12:15', room: 'Computer Lab' }
        ]},
        { className: 'Grade 8', section: 'A', day: 'Tuesday', periods: [
          { subject: 'English', teacher: 'Sara Bano', start: '08:00', end: '08:45', room: 'R-102' },
          { subject: 'Mathematics', teacher: 'Ali Raza', start: '08:45', end: '09:30', room: 'R-101' },
          { subject: 'Islamic Studies', teacher: 'Nadia Hussain', start: '09:45', end: '10:30', room: 'R-104' },
          { subject: 'Science', teacher: 'Imran Malik', start: '10:30', end: '11:15', room: 'Lab-1' },
          { subject: 'Physical Education', teacher: 'Staff', start: '11:30', end: '12:15', room: 'Ground' }
        ]}
      ]);
    }

    if (!this.get('salaries')) {
      this.set('salaries', [
        { id: 'SAL001', employeeId: 'T001', name: 'Ali Raza', designation: 'Senior Teacher', month: 'August 2025', basic: 75000, allowance: 5000, deduction: 2000, bonus: 0, net: 78000, paymentDate: '2025-08-28', status: 'Paid' },
        { id: 'SAL002', employeeId: 'T002', name: 'Sara Bano', designation: 'Teacher', month: 'August 2025', basic: 65000, allowance: 3000, deduction: 1500, bonus: 0, net: 66500, paymentDate: '2025-08-28', status: 'Paid' },
        { id: 'SAL003', employeeId: 'E001', name: 'Sara Malik', designation: 'Accountant', month: 'August 2025', basic: 55000, allowance: 2000, deduction: 1000, bonus: 0, net: 56000, paymentDate: '2025-08-28', status: 'Paid' }
      ]);
    }

    if (!this.get('notifications')) {
      this.set('notifications', [
        { id: 1, title: 'New student registered', message: 'Hassan Ahmed registered in Grade 8', time: '2 hours ago', read: false, type: 'student' },
        { id: 2, title: 'Fee payment received', message: 'Payment of PKR 8,000 from Hassan Ahmed', time: '5 hours ago', read: false, type: 'fee' },
        { id: 3, title: 'Attendance marked', message: 'Grade 8-A attendance for today', time: '1 day ago', read: true, type: 'attendance' },
        { id: 4, title: 'Exam results published', message: 'Mid Term results for Grade 8', time: '2 days ago', read: true, type: 'exam' }
      ]);
    }

    if (!this.get('teacherAttendance')) {
      this.set('teacherAttendance', []);
    }
  }
};

// Initialize on load
DB.init();
