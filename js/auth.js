/**
 * Authentication & Session Management
 */

const Auth = {
  login(username, password, role, remember) {
    const users = DB.get('users') || [];
    const user = users.find(u =>
      (u.username === username || u.email === username) &&
      u.password === password &&
      u.role === role
    );

    if (!user) {
      return { success: false, message: 'Invalid username, password or role.' };
    }

    // Never store password in session
    const session = {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      role: user.role,
      teacherId: user.teacherId || null,
      studentId: user.studentId || null,
      parentId: user.parentId || null,
      loginAt: new Date().toISOString()
    };

    localStorage.setItem(DB.KEYS.currentUser, JSON.stringify(session));
    if (remember) {
      localStorage.setItem('ssms_remember', '1');
    }
    return { success: true, user: session };
  },

  logout() {
    localStorage.removeItem(DB.KEYS.currentUser);
    window.location.href = 'index.html';
  },

  getCurrentUser() {
    try {
      const data = localStorage.getItem(DB.KEYS.currentUser);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  isLoggedIn() {
    return !!this.getCurrentUser();
  },

  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = 'index.html';
      return false;
    }
    return true;
  },

  hasRole(...roles) {
    const user = this.getCurrentUser();
    return user && roles.includes(user.role);
  },

  // Permission matrix
  canAccess(section) {
    const user = this.getCurrentUser();
    if (!user) return false;
    if (user.role === 'admin') return true;

    const permissions = {
      teacher: ['dashboard', 'students', 'attendance', 'homework', 'examinations', 'results', 'timetable', 'notices', 'profile'],
      accountant: ['dashboard', 'fees', 'payroll', 'reports', 'profile'],
      student: ['dashboard', 'profile', 'attendance', 'homework', 'timetable', 'results', 'notices'],
      parent: ['dashboard', 'children', 'attendance', 'fees', 'results', 'homework', 'notices', 'timetable']
    };

    const allowed = permissions[user.role] || [];
    return allowed.includes(section);
  }
};
