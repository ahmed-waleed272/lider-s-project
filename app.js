// -------------------------------------------------------------
// 1. TAILWIND CONFIGURATION
// -------------------------------------------------------------
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49'
        }
      }
    }
  }
};

// -------------------------------------------------------------
// 2. DATABASE & LOCALSTORAGE
// -------------------------------------------------------------
const DB_KEY = 'BATU_LEADER_APP_DB_V17';
const SESSION_KEY = 'BATU_ACTIVE_SESSION_V17';

const defaultDatabase = {
  groups: [
    { 
      id: 'grp-1', 
      name: 'المجموعة الأولى (Group 1)', 
      code: 'GRP-1', 
      pin: '1234', 
      department: 'تكنولوجيا المعلومات',
      officials: [
        { id: 'grp-off-1', name: 'أحمد وليد رضوان', academicId: '02620202', officialCode: 'OFF-GRP1-01', phone: '01012345678', role: 'ليدر المجموعة الرئيسي', personalPin: '1234', pin: '1234' },
        { id: 'grp-off-2', name: 'محمود كمال الدين', academicId: '02620109', officialCode: 'OFF-GRP1-02', phone: '01111111111', role: 'نائب ليدر المجموعة', personalPin: '1234', pin: '1234' }
      ]
    },
    { 
      id: 'grp-2', 
      name: 'المجموعة الثانية (Group 2)', 
      code: 'GRP-2', 
      pin: '1234', 
      department: 'تكنولوجيا المعلومات',
      officials: [
        { id: 'grp-off-3', name: 'خالد مصطفى إبراهيم', academicId: '02620400', officialCode: 'OFF-GRP2-01', phone: '01233333333', role: 'ليدر المجموعة', personalPin: '1234', pin: '1234' }
      ]
    }
  ],
  passwordChangeRequests: [],
  sections: [
    { 
      id: 'sec-1', 
      groupId: 'grp-1', 
      name: 'سكشن 1', 
      code: 'SEC-1', 
      pin: '1234',
      officials: [
        { id: 'off-1', name: 'أحمد وليد رضوان', academicId: '02620202', officialCode: 'OFF-SEC1-01', phone: '01012345678', role: 'ليدر السكشن الرئيسي', personalPin: '1234', pin: '1234' },
        { id: 'off-2', name: 'عمر شريف فتحي', academicId: '02620101', officialCode: 'OFF-SEC1-02', phone: '01000000001', role: 'نائب ليدر السكشن', personalPin: '1234', pin: '1234' }
      ]
    },
    { 
      id: 'sec-2', 
      groupId: 'grp-1', 
      name: 'سكشن 2', 
      code: 'SEC-2', 
      pin: '1234',
      officials: [
        { id: 'off-3', name: 'سارة طارق جلال', academicId: '02620201', officialCode: 'OFF-SEC2-01', phone: '01000000004', role: 'ليدر السكشن', personalPin: '1234', pin: '1234' }
      ]
    },
    { 
      id: 'sec-3', 
      groupId: 'grp-1', 
      name: 'سكشن 3', 
      code: 'SEC-3', 
      pin: '1234',
      officials: [
        { id: 'off-4', name: 'كريم هاني شاكر', academicId: '02620301', officialCode: 'OFF-SEC3-01', phone: '01000000006', role: 'ليدر السكشن', personalPin: '1234', pin: '1234' }
      ]
    },
    { 
      id: 'sec-4', 
      groupId: 'grp-2', 
      name: 'سكشن 4', 
      code: 'SEC-4', 
      pin: '1234',
      officials: [
        { id: 'off-5', name: 'محمد علي حسن', academicId: '02620401', officialCode: 'OFF-SEC4-01', phone: '01000000007', role: 'ليدر السكشن', personalPin: '1234', pin: '1234' }
      ]
    },
    { 
      id: 'sec-5', 
      groupId: 'grp-2', 
      name: 'سكشن 5', 
      code: 'SEC-5', 
      pin: '1234',
      officials: []
    }
  ],
  students: [
    { id: 'std-1', groupId: 'grp-1', sectionId: 'sec-1', academicId: '02620101', name: 'عمر شريف فتحي', phone: '01000000001', status: 'Active', notes: '' },
    { id: 'std-2', groupId: 'grp-1', sectionId: 'sec-1', academicId: '02620102', name: 'مريم محمود إبراهيم', phone: '01000000002', status: 'Active', notes: '' },
    { id: 'std-3', groupId: 'grp-1', sectionId: 'sec-1', academicId: '02620103', name: 'يوسف خالد عبد العزيز', phone: '01000000003', status: 'Active', notes: '' },
    { id: 'std-4', groupId: 'grp-1', sectionId: 'sec-2', academicId: '02620201', name: 'سارة طارق جلال', phone: '01000000004', status: 'Active', notes: '' },
    { id: 'std-5', groupId: 'grp-1', sectionId: 'sec-2', academicId: '02620202', name: 'أحمد وليد رضوان', phone: '01000000005', status: 'Active', notes: '' },
    { id: 'std-6', groupId: 'grp-1', sectionId: 'sec-3', academicId: '02620301', name: 'كريم هاني شاكر', phone: '01000000006', status: 'Active', notes: '' },
    { id: 'std-7', groupId: 'grp-2', sectionId: 'sec-4', academicId: '02620401', name: 'محمد علي حسن', phone: '01000000007', status: 'Active', notes: '' },
    { id: 'std-8', groupId: null, sectionId: null, academicId: '02620501', name: 'زياد طارق ممدوح', phone: '01099887766', status: 'Active', notes: '' },
    { id: 'std-9', groupId: null, sectionId: null, academicId: '02620502', name: 'حبيبة علاء الدين', phone: '01122334455', status: 'Active', notes: '' },
    { id: 'std-10', groupId: null, sectionId: null, academicId: '02620503', name: 'مصطفى أشرف كمال', phone: '01244556677', status: 'Active', notes: '' },
    { id: 'std-11', groupId: null, sectionId: null, academicId: '02620504', name: 'روان شريف مصطفى', phone: '01511223344', status: 'Active', notes: '' }
  ],
  customColumns: [
    { id: 'col-grp-sec-2', scope: 'group_sections', ownerId: 'grp-1', title: 'تأكيد جدول المعمل', type: 'checkbox', options: [] },
    { id: 'col-grp-sec-3', scope: 'group_sections', ownerId: 'grp-1', title: 'ملاحظات وتوجيهات الليدر', type: 'text', options: [] },
    { id: 'col-sec-std-1', scope: 'section_students', ownerId: 'sec-1', title: 'شيت بايثون معمل 1', type: 'status', options: ['تمام', 'مش تمام', 'لسه'] },
    { id: 'col-sec-std-2', scope: 'section_students', ownerId: 'sec-1', title: 'استلام Hardware', type: 'checkbox', options: [] },
    { id: 'col-sec-std-3', scope: 'section_students', ownerId: 'sec-1', title: 'رسوم معمل السكشن', type: 'payment', options: [] },
    { id: 'col-sec-std-4', scope: 'section_students', ownerId: 'sec-2', title: 'شيت الخوارزميات', type: 'status', options: ['تمام', 'مش تمام', 'لسه'] },
    { id: 'col-sec-std-5', scope: 'section_students', ownerId: 'sec-2', title: 'رسوم ملزمة السكشن', type: 'payment', options: [] }
  ],
  customValues: {
    'col-grp-sec-2': { 'sec-1': 'true', 'sec-2': 'true', 'sec-3': 'false' },
    'col-grp-sec-3': { 'sec-1': 'تم تسليم خامات المعمل', 'sec-2': 'جاهز للمناقشة', 'sec-3': 'مطلوب إرسال الكشف المطبوع' },
    'col-sec-std-1': { 'std-1': 'تمام', 'std-2': 'تمام', 'std-3': 'تمام' },
    'col-sec-std-2': { 'std-1': 'true', 'std-2': 'true', 'std-3': 'true' },
    'col-sec-std-3': { 'std-1': '50', 'std-2': '50', 'std-3': '50' },
    'col-sec-std-4': { 'std-4': 'تمام', 'std-5': 'لسه' },
    'col-sec-std-5': { 'std-4': '100', 'std-5': '0' }
  },
  assignments: [
    { 
      id: 'gtask-1', 
      groupId: 'grp-1', 
      sectionId: null, 
      isGroupTask: true, 
      title: 'تسليم كراسات العملي', 
      deadline: '2026-11-10', 
      maxScore: 10, 
      instructions: 'يرجى من جميع ليدرز السكاشن استلام كراسات العملي والتجارب من الطلاب والتأكد من توقيع كل طالب وتسليمها لمعمل الحاسب.',
      createdAt: '2026-11-01'
    },
    { id: 'asg-1', sectionId: 'sec-1', title: 'تكليف هياكل الحلقات Loops', deadline: '2026-11-10', maxScore: 20 },
    { id: 'asg-2', sectionId: 'sec-2', title: 'تقرير الخوارزميات', deadline: '2026-11-15', maxScore: 10 }
  ],
  submissions: {
    'gtask-1': { 
      'std-1': { status: 'completed', score: 10 }, 
      'std-2': { status: 'completed', score: 10 }, 
      'std-3': { status: 'completed', score: 10 },
      'std-4': { status: 'completed', score: 10 },
      'std-5': { status: 'pending', score: null },
      'std-6': { status: 'pending', score: null }
    },
    'asg-1': { 'std-1': { status: 'completed', score: 20 }, 'std-2': { status: 'completed', score: 20 }, 'std-3': { status: 'completed', score: 20 } },
    'asg-2': { 'std-4': { status: 'completed', score: 10 }, 'std-5': { status: 'pending', score: null } }
  },
  attendanceSessions: [
    { id: 'att-1', sectionId: 'sec-1', date: '2026-11-01', title: 'معمل برمجة بايثون' }
  ],
  attendanceRecords: {
    'att-1': { 'std-1': 'present', 'std-2': 'present', 'std-3': 'present' }
  }
};

function ensureOfficialSecurityFields(officials, students, prefix) {
  if (!Array.isArray(officials)) return;
  officials.forEach((off, idx) => {
    if (!off.academicId) {
      const matchedStd = (students || defaultDatabase.students || []).find(s => s.name === off.name);
      if (matchedStd && matchedStd.academicId) {
        off.academicId = matchedStd.academicId;
      } else {
        off.academicId = '02620' + (idx < 9 ? '0' + (idx + 1) : (idx + 1));
      }
    }
    if (!off.officialCode) {
      off.officialCode = (prefix || 'OFF-') + (off.academicId ? off.academicId.slice(-4) : (off.id ? off.id.slice(-4) : '01'));
    }
    if (!off.personalPin) {
      off.personalPin = off.pin || '1234';
    }
  });
}

function loadDB() {
  const data = localStorage.getItem(DB_KEY);
  if (data) {
    try {
      const parsed = JSON.parse(data);
      if (parsed && Array.isArray(parsed.sections)) {
        parsed.sections.forEach(s => {
          if (!Array.isArray(s.officials)) s.officials = [];
          ensureOfficialSecurityFields(s.officials, parsed.students, 'OFF-SEC-');
        });
        if (Array.isArray(parsed.students)) {
          defaultDatabase.students.forEach(defStd => {
            if (!parsed.students.some(s => s.academicId === defStd.academicId)) {
              parsed.students.push(defStd);
            }
          });
        }
        if (Array.isArray(parsed.groups)) {
          parsed.groups.forEach(g => {
            if (!Array.isArray(g.officials) || g.officials.length === 0) {
              const defG = defaultDatabase.groups.find(x => x.id === g.id);
              g.officials = defG && defG.officials ? JSON.parse(JSON.stringify(defG.officials)) : [
                { id: 'grp-off-' + g.id + '-1', name: 'ليدر ' + g.name, academicId: '02620202', officialCode: 'OFF-GRP1-01', phone: '', role: 'ليدر المجموعة الرئيسي', pin: g.pin }
              ];
            }
            ensureOfficialSecurityFields(g.officials, parsed.students, 'OFF-GRP-');
          });
        }
        if (!Array.isArray(parsed.passwordChangeRequests)) parsed.passwordChangeRequests = [];
        return parsed;
      }
    } catch (e) {}
  }
  return defaultDatabase;
}

function saveDB(data) {
  localStorage.setItem(DB_KEY, JSON.stringify(data));
}

let DB = loadDB();

// -------------------------------------------------------------
// 3. APPLICATION STATE
// -------------------------------------------------------------
const state = {
  userRole: null,
  currentAccount: null,
  currentOfficial: null,
  activeTab: 'home',
  searchQuery: '',
  modal: null,
  modalData: null,
  authMode: 'group_login',
  studentDirectoryScope: 'all',
  selectedStudentIds: [],
  bulkTargetGroup: ''
};

// استعادة الجلسة المخزنة
const savedSession = sessionStorage.getItem(SESSION_KEY);
if (savedSession) {
  try {
    const sess = JSON.parse(savedSession);
    if (sess.role === 'group_leader') {
      const grp = DB.groups.find(g => g.id === sess.id);
      if (grp) {
        state.userRole = 'group_leader';
        state.currentAccount = grp;
        state.currentOfficial = (grp.officials || []).find(o => (sess.academicId && o.academicId === sess.academicId) || o.id === sess.officialId) || (grp.officials?.[0] || null);
        state.activeTab = 'home';
      }
    } else if (sess.role === 'section_leader') {
      const sec = DB.sections.find(s => s.id === sess.id);
      if (sec) {
        state.userRole = 'section_leader';
        state.currentAccount = sec;
        state.currentOfficial = (sec.officials || []).find(o => (sess.academicId && o.academicId === sess.academicId) || o.id === sess.officialId) || (sec.officials?.[0] || null);
        state.activeTab = 'home';
      }
    }
  } catch (e) {
    sessionStorage.removeItem(SESSION_KEY);
  }
}

// -------------------------------------------------------------
// 4. ROLL-UP STATS ENGINE
// -------------------------------------------------------------
function getSectionDoneStats(sectionId) {
  const students = DB.students.filter(s => s.sectionId === sectionId);
  if (students.length === 0) {
    return {
      totalStudents: 0,
      doneItems: 0,
      totalItems: 0,
      percentage: 0,
      isAllDone: false,
      totalPaid: 0,
      paidStudents: 0,
      completedAssignments: 0,
      totalAssignments: 0
    };
  }

  const sec = DB.sections.find(s => s.id === sectionId);
  const secColumns = DB.customColumns.filter(c => c.scope === 'section_students' && c.ownerId === sectionId);
  const assignments = DB.assignments.filter(a => a.sectionId === sectionId || (sec && a.groupId === sec.groupId));
  
  let totalItems = 0;
  let doneItems = 0;
  let totalPaid = 0;
  let paidStudentsSet = new Set();
  let completedAssignments = 0;

  students.forEach(std => {
    secColumns.forEach(col => {
      const val = DB.customValues[col.id]?.[std.id];
      if (col.type === 'status') {
        totalItems++;
        if (val === 'تمام') doneItems++;
      } else if (col.type === 'checkbox') {
        totalItems++;
        if (val === 'true') doneItems++;
      } else if (col.type === 'payment') {
        const num = Number(val) || 0;
        totalPaid += num;
        if (num > 0) paidStudentsSet.add(std.id);
      }
    });

    assignments.forEach(asg => {
      totalItems++;
      const sub = DB.submissions[asg.id]?.[std.id];
      if (sub && sub.status === 'completed') {
        doneItems++;
        completedAssignments++;
      }
    });
  });

  const percentage = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;
  const isAllDone = totalItems > 0 && doneItems === totalItems;

  return {
    totalStudents: students.length,
    doneItems,
    totalItems,
    percentage,
    isAllDone,
    totalPaid,
    paidStudents: paidStudentsSet.size,
    completedAssignments,
    totalAssignments: assignments.length * students.length
  };
}

// -------------------------------------------------------------
// 5. AUTHENTICATION & OFFICIAL ACTIONS
// -------------------------------------------------------------
function loginGroupLeader(identifier, academicId, pin) {
  if (!identifier || !academicId || !pin) {
    alert('يرجى ملء جميع الحقول المطلوبة: اختيار المجموعة، الرقم الأكاديمي، ورمز PIN.');
    return;
  }
  const iden = identifier.trim().toLowerCase();
  const acadId = academicId.trim();
  const p = pin.trim();

  const grp = DB.groups.find(g => (g.id.toLowerCase() === iden || g.code.toLowerCase() === iden || g.name.toLowerCase() === iden));
  if (!grp) {
    alert('المجموعة المختارة غير موجودة!');
    return;
  }

  const officials = Array.isArray(grp.officials) ? grp.officials : [];
  const matchedOfficial = officials.find(o => (o.academicId && o.academicId.trim() === acadId));

  if (!matchedOfficial) {
    alert(`❌ فشل التحقق الأمني:\nالرقم الأكاديمي (${acadId}) غير مسجل ضمن مسؤولي ${grp.name}!`);
    return;
  }

  const validPins = [matchedOfficial.personalPin, matchedOfficial.pin, matchedOfficial.officialCode, grp.pin].filter(Boolean).map(x => x.toLowerCase());
  if (!validPins.includes(p.toLowerCase())) {
    alert(`❌ فشل الدخول: كلمة السر أو كود المسؤول غير صحيح للمسؤول (${matchedOfficial.name})!`);
    return;
  }

  state.userRole = 'group_leader';
  state.currentAccount = grp;
  state.currentOfficial = matchedOfficial;
  state.activeTab = 'home';
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ 
    role: 'group_leader', 
    id: grp.id, 
    officialId: matchedOfficial.id, 
    academicId: matchedOfficial.academicId 
  }));
  render();
}

function loginSectionLeader(identifier, academicId, pin) {
  if (!identifier || !academicId || !pin) {
    alert('يرجى ملء جميع الحقول المطلوبة: اختيار السكشن، الرقم الأكاديمي، ورمز PIN.');
    return;
  }
  const iden = identifier.trim().toLowerCase();
  const acadId = academicId.trim();
  const p = pin.trim();

  const sec = DB.sections.find(s => (s.id.toLowerCase() === iden || s.code.toLowerCase() === iden || s.name.toLowerCase() === iden));
  if (!sec) {
    alert('السكشن المختار غير موجود!');
    return;
  }

  const officials = Array.isArray(sec.officials) ? sec.officials : [];
  const matchedOfficial = officials.find(o => (o.academicId && o.academicId.trim() === acadId));

  if (!matchedOfficial) {
    alert(`❌ فشل التحقق الأمني:\nالرقم الأكاديمي (${acadId}) غير مسجل ضمن مسؤولي ${sec.name}!`);
    return;
  }

  const validPins = [matchedOfficial.personalPin, matchedOfficial.pin, matchedOfficial.officialCode, sec.pin].filter(Boolean).map(x => x.toLowerCase());
  if (!validPins.includes(p.toLowerCase())) {
    alert(`❌ فشل الدخول: كلمة السر أو كود المسؤول غير صحيح للمسؤول (${matchedOfficial.name})!`);
    return;
  }

  state.userRole = 'section_leader';
  state.currentAccount = sec;
  state.currentOfficial = matchedOfficial;
  state.activeTab = 'home';
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ 
    role: 'section_leader', 
    id: sec.id, 
    officialId: matchedOfficial.id, 
    academicId: matchedOfficial.academicId 
  }));
  render();
}

function createGroupAccount(name, code, founderName, founderAcadId, pin, founderPhone) {
  if (!name || !code || !founderAcadId || !pin) {
    alert('يرجى ملء جميع الحقول المطلوبة.');
    return;
  }
  const codeTrimmed = code.trim().toUpperCase();
  if (DB.groups.some(g => g.code.toUpperCase() === codeTrimmed)) {
    alert('كود المجموعة مستخدم بالفعل!');
    return;
  }

  const acad = founderAcadId.trim();
  const fName = founderName ? founderName.trim() : 'ليدر ' + name.trim();
  const newOff = {
    id: 'grp-off-' + Date.now(),
    name: fName,
    academicId: acad,
    officialCode: 'OFF-GRP-' + acad.slice(-4),
    phone: founderPhone ? founderPhone.trim() : '',
    role: 'ليدر المجموعة الرئيسي',
    personalPin: pin.trim(),
    pin: pin.trim()
  };

  const newGrp = {
    id: 'grp-' + Date.now(),
    name: name.trim(),
    code: codeTrimmed,
    pin: pin.trim(),
    department: 'تكنولوجيا المعلومات',
    officials: [newOff]
  };

  DB.groups.push(newGrp);
  saveDB(DB);

  state.userRole = 'group_leader';
  state.currentAccount = newGrp;
  state.currentOfficial = newOff;
  state.activeTab = 'home';
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ 
    role: 'group_leader', 
    id: newGrp.id, 
    officialId: newOff.id, 
    academicId: newOff.academicId 
  }));
  alert(`تم إنشاء حساب المجموعة بنجاح!\nالمجموعة: ${newGrp.name}`);
  render();
}

function createSectionAccount(groupId, name, code, pin, initialLeaderName = '', initialLeaderPhone = '', initialLeaderRole = 'ليدر السكشن الرئيسي') {
  if (state.userRole !== 'group_leader') {
    alert('غير مسموح: إنشاء حسابات السكاشن صلاحية حصرية لليدر المجموعة.');
    return;
  }
  if (!groupId || !name || !code || !pin) {
    alert('يرجى ملء الحقول المطلوبة.');
    return;
  }
  const codeTrimmed = code.trim().toUpperCase();
  if (DB.sections.some(s => s.code.toUpperCase() === codeTrimmed)) {
    alert('كود السكشن مستخدم بالفعل!');
    return;
  }

  const officials = [];
  if (initialLeaderName && initialLeaderName.trim()) {
    const acad = '0262' + Math.floor(1000 + Math.random() * 9000);
    officials.push({
      id: 'off-' + Date.now(),
      name: initialLeaderName.trim(),
      academicId: acad,
      officialCode: 'OFF-SEC-' + acad.slice(-4),
      phone: initialLeaderPhone ? initialLeaderPhone.trim() : '',
      role: initialLeaderRole.trim(),
      personalPin: pin.trim(),
      pin: pin.trim()
    });
  }

  const newSec = {
    id: 'sec-' + Date.now(),
    groupId: groupId,
    name: name.trim(),
    code: codeTrimmed,
    pin: pin.trim(),
    officials: officials
  };

  DB.sections.push(newSec);
  saveDB(DB);
  alert(`تمت إضافة السكشن الجديد بنجاح! (${newSec.name})`);
  closeModal();
  render();
}

function addSectionOfficial(sectionId, name, academicId, phone, role, pin, officialCode) {
  if (state.userRole !== 'group_leader') return;
  const sec = DB.sections.find(s => s.id === sectionId);
  if (!sec || !name || !academicId) {
    alert('الاسم والرقم الأكاديمي مطلوبان.');
    return;
  }
  const acadId = academicId.trim();
  if (!Array.isArray(sec.officials)) sec.officials = [];
  if (sec.officials.some(o => o.academicId === acadId)) {
    alert('الرقم الأكاديمي مسجل بالفعل لمسؤول آخر!');
    return;
  }

  const code = officialCode ? officialCode.trim() : 'OFF-SEC-' + acadId.slice(-4);
  const newOff = {
    id: 'off-' + Date.now() + Math.random().toString(36).substr(2, 4),
    name: name.trim(),
    academicId: acadId,
    officialCode: code,
    phone: phone ? phone.trim() : '',
    role: role ? role.trim() : 'ليدر السكشن',
    personalPin: pin ? pin.trim() : (sec.pin || '1234'),
    pin: pin ? pin.trim() : sec.pin
  };

  sec.officials.push(newOff);
  saveDB(DB);
  alert(`✅ تم تعيين المسؤول (${newOff.name}) بنجاح!`);
  render();
}

function deleteSectionOfficial(sectionId, officialId) {
  if (state.userRole !== 'group_leader') return;
  const sec = DB.sections.find(s => s.id === sectionId);
  if (!sec || !Array.isArray(sec.officials)) return;

  const off = sec.officials.find(o => o.id === officialId);
  if (!off) return;

  const inputAcadId = prompt(`🔒 تأكيد أمني مطلوب:\nأنت على وشك حذف المسؤول (${off.name}).\nيرجى كتابة رقمك الأكاديمي لتأكيد العملية:`);
  if (!inputAcadId) return;

  const currentAcad = state.currentOfficial?.academicId || '';
  const grpOfficials = state.currentAccount.officials || [];
  const isAllowed = (currentAcad && inputAcadId.trim() === currentAcad.trim()) || grpOfficials.some(o => o.academicId && o.academicId.trim() === inputAcadId.trim());

  if (!isAllowed) {
    alert('❌ تم إلغاء العملية: الرقم الأكاديمي غير صحيح!');
    return;
  }

  sec.officials = sec.officials.filter(o => o.id !== officialId);
  saveDB(DB);
  alert(`✅ تم حذف المسؤول بنجاح.`);
  render();
}

function resetSectionOfficialPin(sectionId, officialId) {
  if (state.userRole !== 'group_leader') return;
  const sec = DB.sections.find(s => s.id === sectionId);
  if (!sec || !Array.isArray(sec.officials)) return;

  const off = sec.officials.find(o => o.id === officialId);
  if (!off) return;

  const inputAcadId = prompt(`🔒 تأكيد أمني مطلوب:\nإعادة تعيين كلمة السر لـ (${off.name}).\nيرجى إدخال رقمك الأكاديمي للتأكيد:`);
  if (!inputAcadId) return;

  const currentAcad = state.currentOfficial?.academicId || '';
  const grpOfficials = state.currentAccount.officials || [];
  const isAllowed = (currentAcad && inputAcadId.trim() === currentAcad.trim()) || grpOfficials.some(o => o.academicId && o.academicId.trim() === inputAcadId.trim());

  if (!isAllowed) {
    alert('❌ تم إلغاء العملية: الرقم الأكاديمي غير صحيح!');
    return;
  }

  const newPin = prompt(`🔑 أدخل رمز PIN الجديد للمسؤول (${off.name}):`, '1234');
  if (!newPin || newPin.trim().length < 3) {
    alert('كلمة السر يجب ألا تقل عن 3 خانات.');
    return;
  }

  off.personalPin = newPin.trim();
  off.pin = newPin.trim();
  saveDB(DB);
  alert(`✅ تم تعيين كلمة السر الجديدة للمسؤول (${off.name}).`);
  render();
}

function recoverForgottenPassword(targetType, accountId, academicId, phone, newPin, confirmPin) {
  if (!targetType || !accountId || !academicId || !phone || !newPin || !confirmPin) {
    alert('يرجى ملء جميع الحقول المطلوبة.');
    return;
  }
  const acad = academicId.trim();
  const ph = phone.trim().replace(/^0/, '');
  const np = newPin.trim();
  const cp = confirmPin.trim();

  if (np.length < 3 || np !== cp) {
    alert('كلمتا السر غير متطابقتين أو أقل من 3 خانات.');
    return;
  }

  const target = targetType === 'group' ? DB.groups.find(g => g.id === accountId) : DB.sections.find(s => s.id === accountId);
  if (!target) return;

  const matchedOff = (target.officials || []).find(o => o.academicId && o.academicId.trim() === acad);
  if (!matchedOff) {
    alert(`❌ فشل التحقق: الرقم الأكاديمي غير مسجل ضمن مسؤولي ${target.name}!`);
    return;
  }

  const offPhoneClean = (matchedOff.phone || '').trim().replace(/^0/, '');
  if (offPhoneClean && offPhoneClean !== ph) {
    alert(`❌ فشل التحقق: رقم الهاتف غير مطابق للمسجل.`);
    return;
  }

  matchedOff.personalPin = np;
  matchedOff.pin = np;
  saveDB(DB);
  state.authMode = targetType === 'group' ? 'group_login' : 'section_login';
  alert(`🎉 تم التحقق بنجاح واسترداد الحساب! تم تعيين كلمة السر الجديدة.`);
  render();
}

function logout() {
  state.userRole = null;
  state.currentAccount = null;
  state.currentOfficial = null;
  sessionStorage.removeItem(SESSION_KEY);
  render();
}

// -------------------------------------------------------------
// 6. CELLS & SPREADSHEET ENGINE
// -------------------------------------------------------------
function updateCellValue(colId, targetId, value) {
  if (!DB.customValues[colId]) DB.customValues[colId] = {};
  DB.customValues[colId][targetId] = value;
  saveDB(DB);
  renderTableOnly();
}

function addCustomColumn(title, type, optionsStr) {
  let options = [];
  if (type === 'status') options = ['تمام', 'مش تمام', 'لسه'];
  else if (type === 'attendance') options = ['حاضر', 'غائب', 'متأخر', 'بإذن'];
  else if (optionsStr) options = optionsStr.split(',').map(s => s.trim()).filter(Boolean);

  const isGrp = state.userRole === 'group_leader';
  const newCol = {
    id: 'col-' + Date.now(),
    scope: isGrp ? 'group_sections' : 'section_students',
    ownerId: state.currentAccount.id,
    title: title.trim(),
    type,
    options
  };

  DB.customColumns.push(newCol);
  saveDB(DB);
  closeModal();
  render();
}

function deleteCustomColumn(colId) {
  if (confirm('هل أنت متأكد من حذف هذا العمود بالكامل؟')) {
    DB.customColumns = DB.customColumns.filter(c => c.id !== colId);
    delete DB.customValues[colId];
    saveDB(DB);
    render();
  }
}

// -------------------------------------------------------------
// 7. TASKS & ASSIGNMENTS
// -------------------------------------------------------------
function createGroupTask(title, deadline, maxScore, instructions) {
  if (state.userRole !== 'group_leader' || !title.trim()) return;

  const newTask = {
    id: 'gtask-' + Date.now(),
    groupId: state.currentAccount.id,
    sectionId: null,
    isGroupTask: true,
    title: title.trim(),
    deadline: deadline || null,
    maxScore: Number(maxScore) || 10,
    instructions: instructions ? instructions.trim() : '',
    createdAt: new Date().toISOString().split('T')[0]
  };

  if (!Array.isArray(DB.assignments)) DB.assignments = [];
  DB.assignments.unshift(newTask);
  saveDB(DB);
  closeModal();
  alert(`تم نشر التاسك (${newTask.title}) بنجاح!`);
  render();
}

function deleteGroupTask(taskId) {
  if (state.userRole !== 'group_leader') return;
  if (confirm(`هل أنت متأكد من حذف هذا التكليف؟`)) {
    DB.assignments = DB.assignments.filter(a => a.id !== taskId);
    delete DB.submissions[taskId];
    saveDB(DB);
    render();
  }
}

function createAssignment(title, deadline, maxScore) {
  if (state.userRole !== 'section_leader' || !title.trim()) return;
  const newAsg = {
    id: 'asg-' + Date.now(),
    sectionId: state.currentAccount.id,
    title: title.trim(),
    deadline: deadline || null,
    maxScore: Number(maxScore) || 10
  };
  DB.assignments.unshift(newAsg);
  saveDB(DB);
  closeModal();
  render();
}

function updateSubmission(asgId, studentId, status, score) {
  if (state.userRole !== 'section_leader') return;
  if (!DB.submissions[asgId]) DB.submissions[asgId] = {};
  DB.submissions[asgId][studentId] = {
    status: status,
    score: score !== '' ? Number(score) : null
  };
  saveDB(DB);
  render();
}

function createAttendanceSession(title, date) {
  if (state.userRole !== 'section_leader') return;
  const newSession = {
    id: 'att-' + Date.now(),
    sectionId: state.currentAccount.id,
    date: date || new Date().toISOString().split('T')[0],
    title: title.trim() || 'جلسة جديدة'
  };
  DB.attendanceSessions.unshift(newSession);
  saveDB(DB);
  closeModal();
  render();
}

function saveAttendanceBulk(sessionId, defaultStatus) {
  if (state.userRole !== 'section_leader') return;
  const students = DB.students.filter(s => s.sectionId === state.currentAccount.id);
  if (!DB.attendanceRecords[sessionId]) DB.attendanceRecords[sessionId] = {};
  students.forEach(s => {
    DB.attendanceRecords[sessionId][s.id] = defaultStatus;
  });
  saveDB(DB);
  render();
}

function updateSingleAttendance(sessionId, studentId, status) {
  if (state.userRole !== 'section_leader') return;
  if (!DB.attendanceRecords[sessionId]) DB.attendanceRecords[sessionId] = {};
  DB.attendanceRecords[sessionId][studentId] = status;
  saveDB(DB);
  render();
}

// -------------------------------------------------------------
// 8. STUDENTS DIRECTORY & MANAGEMENT
// -------------------------------------------------------------
function showQuickToast(msg) {
  let toast = document.getElementById('batu-quick-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'batu-quick-toast';
    toast.className = 'fixed bottom-5 left-5 z-50 bg-slate-900 border border-amber-500/80 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 transition-opacity duration-300 pointer-events-none opacity-0';
    document.body.appendChild(toast);
  }
  toast.innerHTML = '<span>⚡</span> <span>' + msg + '</span>';
  toast.style.opacity = '1';
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.style.opacity = '0';
  }, 2500);
}

function getFilteredDirectoryStudents() {
  const isGrp = state.userRole === 'group_leader';
  let list = DB.students.slice();

  if (state.studentDirectoryScope === 'unassigned') {
    list = list.filter(s => !s.groupId);
  } else if (state.studentDirectoryScope === 'my_group') {
    if (isGrp) {
      list = list.filter(s => s.groupId === state.currentAccount.id);
    } else {
      list = list.filter(s => s.sectionId === state.currentAccount.id);
    }
  } else if (state.studentDirectoryScope && state.studentDirectoryScope.startsWith('grp-')) {
    list = list.filter(s => s.groupId === state.studentDirectoryScope);
  }

  if (state.searchQuery && state.searchQuery.trim()) {
    const q = state.searchQuery.trim().toLowerCase();
    list = list.filter(s => {
      const nameMatch = s.name && s.name.toLowerCase().includes(q);
      const acadMatch = s.academicId && s.academicId.includes(q);
      const phoneMatch = s.phone && s.phone.includes(q);
      const sec = DB.sections.find(x => x.id === s.sectionId);
      const grp = DB.groups.find(x => x.id === s.groupId);
      const secMatch = sec && sec.name.toLowerCase().includes(q);
      const grpMatch = grp && grp.name.toLowerCase().includes(q);
      return nameMatch || acadMatch || phoneMatch || secMatch || grpMatch;
    });
  }

  return list;
}

function renderStudentsTableOnly() {
  const container = document.getElementById('students-table-container');
  const countBadge = document.getElementById('students-count-badge');
  const batchBarContainer = document.getElementById('students-batch-bar-container');
  const filtered = getFilteredDirectoryStudents();

  if (countBadge) {
    countBadge.innerHTML = 'عثر على <strong class="text-amber-500 font-mono">' + filtered.length + '</strong> طالب من إجمالي <strong class="font-mono">' + DB.students.length + '</strong>';
  }
  if (batchBarContainer) {
    batchBarContainer.innerHTML = renderStudentsBatchBarHTML(filtered);
  }
  if (container) {
    container.innerHTML = renderStudentsTableHTML(filtered);
  }
}

function toggleSelectStudent(id, checked) {
  if (checked) {
    if (!state.selectedStudentIds.includes(id)) state.selectedStudentIds.push(id);
  } else {
    state.selectedStudentIds = state.selectedStudentIds.filter(x => x !== id);
  }
  renderStudentsTableOnly();
}

function toggleSelectAllStudents(checked) {
  const filtered = getFilteredDirectoryStudents();
  if (checked) {
    state.selectedStudentIds = filtered.map(s => s.id);
  } else {
    state.selectedStudentIds = [];
  }
  renderStudentsTableOnly();
}

function clearSelectedStudents() {
  state.selectedStudentIds = [];
  renderStudentsTableOnly();
}

function quickAssignStudentGroup(studentId, newGroupId) {
  if (state.userRole !== 'group_leader') return;
  const std = DB.students.find(s => s.id === studentId);
  if (!std) return;

  const myGroupId = state.currentAccount.id;
  if (std.groupId && std.groupId !== myGroupId) {
    alert('غير مسموح: هذا الطالب مسجل في مجموعة أخرى.');
    return;
  }

  if (!newGroupId) {
    std.groupId = null;
    std.sectionId = null;
  } else {
    std.groupId = myGroupId;
    const defaultSec = DB.sections.find(s => s.groupId === myGroupId);
    std.sectionId = defaultSec ? defaultSec.id : null;
  }

  saveDB(DB);
  renderStudentsTableOnly();
  showQuickToast(newGroupId ? 'تم تسكين الطالب بنجاح! ⚡' : 'تمت إزالة تسكين الطالب');
}

function applyBulkAssignGroup(targetSectionId) {
  if (state.userRole !== 'group_leader' || state.selectedStudentIds.length === 0) return;
  const myGroupId = state.currentAccount.id;
  const mySections = DB.sections.filter(s => s.groupId === myGroupId);
  const defaultSec = mySections.find(s => s.id === targetSectionId) || mySections[0];

  let assignedCount = 0;
  state.selectedStudentIds.forEach(id => {
    const std = DB.students.find(s => s.id === id);
    if (std && (!std.groupId || std.groupId === myGroupId)) {
      std.groupId = myGroupId;
      std.sectionId = defaultSec ? defaultSec.id : null;
      assignedCount++;
    }
  });

  state.selectedStudentIds = [];
  saveDB(DB);
  alert('⚡ تم تسكين ' + assignedCount + ' طالب في ' + state.currentAccount.name + '!');
  render();
}

function parseStudentLine(line) {
  line = line.trim();
  if (!line) return null;
  const phoneMatch = line.match(/01[0125][0-9]{8}/);
  const phone = phoneMatch ? phoneMatch[0] : '';
  let rest = line.replace(phone, '').trim();

  const idMatch = rest.match(/\b\d{5,12}\b/);
  const academicId = idMatch ? idMatch[0] : '';
  rest = rest.replace(academicId, '').trim();

  const name = rest.replace(/^[\s\-–—:,|]+|[\s\-–—:,|]+$/g, '').replace(/[\t,]+/g, ' ').trim();
  if (!name && !academicId) return null;
  return { academicId, name: name || 'طالب جديد', phone };
}

function processBulkPasteStudents(rawText) {
  if (state.userRole !== 'group_leader' || !rawText.trim()) return;
  const lines = rawText.split('\n');
  let addedCount = 0;
  const myGroupId = state.currentAccount.id;

  lines.forEach((line, idx) => {
    const parsed = parseStudentLine(line);
    if (!parsed) return;

    let acad = parsed.academicId || ('026' + String(Math.floor(20000 + idx)).padStart(5, '0'));
    if (DB.students.some(s => s.academicId === acad)) return;

    DB.students.push({
      id: 'std-' + Date.now() + Math.random().toString(36).substr(2, 4),
      groupId: myGroupId,
      sectionId: null,
      academicId: acad,
      name: parsed.name,
      phone: parsed.phone,
      status: 'Active',
      notes: 'لصق سريع بواسطة ' + state.currentAccount.name,
      addedByRole: 'group_leader',
      addedAt: new Date().toISOString()
    });
    addedCount++;
  });

  saveDB(DB);
  closeModal();
  alert('⚡ تم إضافة ' + addedCount + ' طالب بنجاح!');
  render();
}

function addStudentQuick(academicId, name, phone) {
  if (state.userRole !== 'group_leader' || !academicId || !name) return;
  const acad = academicId.trim();
  if (DB.students.some(s => s.academicId === acad)) {
    alert('رقم الجلوس مسجل بالفعل!');
    return;
  }

  DB.students.push({
    id: 'std-' + Date.now() + Math.random().toString(36).substr(2, 3),
    groupId: state.currentAccount.id,
    sectionId: null,
    academicId: acad,
    name: name.trim(),
    phone: phone ? phone.trim() : '',
    status: 'Active',
    notes: 'أضافه ليدر ' + state.currentAccount.name,
    addedByRole: 'group_leader',
    addedAt: new Date().toISOString()
  });

  saveDB(DB);
  closeModal();
  showQuickToast('تمت إضافة الطالب بنجاح! ⚡');
  render();
}

function addStudent(name, academicId, targetSectionId, phone) {
  if (!name || !academicId) return;
  const acad = academicId.trim();
  const isSecLeader = state.userRole === 'section_leader';

  const targetSec = isSecLeader ? state.currentAccount : (targetSectionId ? DB.sections.find(s => s.id === targetSectionId) : null);
  const targetGrpId = isSecLeader ? targetSec.groupId : state.currentAccount.id;

  if (DB.students.some(s => s.academicId === acad)) {
    alert('الرقم الأكاديمي مسجل بالفعل!');
    return;
  }

  DB.students.push({
    id: 'std-' + Date.now() + Math.random().toString(36).substr(2, 3),
    groupId: targetGrpId,
    sectionId: targetSec ? targetSec.id : null,
    academicId: acad,
    name: name.trim(),
    phone: phone ? phone.trim() : '',
    status: 'Active',
    notes: isSecLeader ? ('أضافه ليدر ' + targetSec.name) : 'أضافه ليدر المجموعة',
    addedByRole: isSecLeader ? 'section_leader' : 'group_leader',
    addedBySectionId: isSecLeader ? targetSec.id : null,
    addedBySectionName: isSecLeader ? targetSec.name : null,
    addedAt: new Date().toISOString()
  });

  saveDB(DB);
  closeModal();
  showQuickToast('تمت إضافة الطالب بنجاح! ⚡');
  render();
}

function assignStudentToMySection(studentId) {
  if (state.userRole !== 'section_leader') return;
  const std = DB.students.find(s => s.id === studentId);
  if (!std) return;

  std.groupId = state.currentAccount.groupId;
  std.sectionId = state.currentAccount.id;
  std.addedByRole = 'section_leader';
  std.addedBySectionId = state.currentAccount.id;
  std.addedBySectionName = state.currentAccount.name;
  std.addedAt = new Date().toISOString();

  saveDB(DB);
  showQuickToast('⚡ تم تسكين الطالب في ' + state.currentAccount.name);
  render();
}

function unassignStudentFromMySection(studentId) {
  if (state.userRole !== 'section_leader') return;
  const std = DB.students.find(s => s.id === studentId);
  if (!std || std.sectionId !== state.currentAccount.id) return;

  if (confirm('هل تريد إلغاء تسكين الطالب وإعادته للانتظار؟')) {
    std.sectionId = null;
    saveDB(DB);
    showQuickToast('تم إلغاء تسكين الطالب.');
    render();
  }
}

function saveEditStudent(studentId, name, academicId, phone, status, notes, sectionId) {
  const std = DB.students.find(s => s.id === studentId);
  if (!std) return;

  std.name = name.trim();
  std.academicId = academicId.trim();
  std.phone = phone ? phone.trim() : '';
  if (status) std.status = status;
  if (notes !== undefined) std.notes = notes;

  if (sectionId !== undefined && state.userRole === 'group_leader') {
    std.sectionId = sectionId || null;
  }

  saveDB(DB);
  closeModal();
  render();
}

function deleteStudent(studentId) {
  if (confirm('هل أنت متأكد من حذف هذا الطالب نهائياً؟')) {
    DB.students = DB.students.filter(s => s.id !== studentId);
    Object.keys(DB.customValues).forEach(colId => {
      delete DB.customValues[colId][studentId];
    });
    saveDB(DB);
    render();
  }
}

function deleteSection(sectionId) {
  if (state.userRole !== 'group_leader') return;
  const sec = DB.sections.find(s => s.id === sectionId);
  if (!sec) return;
  if (confirm(`هل أنت متأكد من حذف حساب ${sec.name}؟`)) {
    DB.sections = DB.sections.filter(s => s.id !== sectionId);
    DB.students.forEach(s => {
      if (s.sectionId === sectionId) s.sectionId = null;
    });
    saveDB(DB);
    render();
  }
}

// -------------------------------------------------------------
// 9. PASSWORDS & SECURITY LOGIC
// -------------------------------------------------------------
function togglePinVisibility(elemId, actualPin) {
  const el = document.getElementById(elemId);
  const icon = document.getElementById(elemId + '-icon');
  if (!el) return;
  if (el.getAttribute('data-shown') === 'true') {
    el.innerText = '••••';
    el.setAttribute('data-shown', 'false');
    if (icon) icon.innerText = '👁️ إظهار';
  } else {
    el.innerText = actualPin;
    el.setAttribute('data-shown', 'true');
    if (icon) icon.innerText = '🙈 إخفاء';
  }
}

function updateMyPersonalPassword(currentPin, newPersonalPin, confirmPersonalPin, newOfficialCode) {
  if (!state.currentAccount || !state.currentOfficial) return;
  const cp = currentPin ? currentPin.trim() : '';
  const np = newPersonalPin ? newPersonalPin.trim() : '';
  const cfp = confirmPersonalPin ? confirmPersonalPin.trim() : '';

  const myOff = state.currentOfficial;
  const expectedPin = myOff.personalPin || myOff.pin || state.currentAccount.pin;

  if (cp.toLowerCase() !== expectedPin.toLowerCase()) {
    alert('❌ كلمة السر الحالية غير صحيحة!');
    return;
  }
  if (np !== cfp || np.length < 3) {
    alert('❌ كلمتا السر غير متطابقتين أو أقل من 3 خانات.');
    return;
  }

  myOff.personalPin = np;
  myOff.pin = np;
  if (newOfficialCode && newOfficialCode.trim()) {
    myOff.officialCode = newOfficialCode.trim();
  }

  const target = state.userRole === 'group_leader' ? DB.groups.find(g => g.id === state.currentAccount.id) : DB.sections.find(s => s.id === state.currentAccount.id);
  if (target && Array.isArray(target.officials)) {
    const off = target.officials.find(o => o.id === myOff.id);
    if (off) {
      off.personalPin = np;
      off.pin = np;
      if (newOfficialCode && newOfficialCode.trim()) off.officialCode = newOfficialCode.trim();
    }
  }

  saveDB(DB);
  closeModal();
  alert(`✅ تم تحديث كلمة السر الشخصية بنجاح!`);
  render();
}

function requestPasswordChange(newPin, confirmPin, requesterOfficialId, requesterAcademicId, requesterCode) {
  if (!state.currentAccount || !newPin || !confirmPin) return;
  const np = newPin.trim();
  const cp = confirmPin.trim();
  if (np.length < 3 || np !== cp) {
    alert('كلمتا السر غير متطابقتين أو أقل من 3 خانات.');
    return;
  }

  const account = state.currentAccount;
  const isGrp = state.userRole === 'group_leader';
  const target = isGrp ? DB.groups.find(g => g.id === account.id) : DB.sections.find(s => s.id === account.id);
  if (!target) return;

  const officials = Array.isArray(target.officials) && target.officials.length > 0 ? target.officials : [
    { id: 'off-' + target.id, name: target.name, academicId: '02620202', officialCode: 'OFF-' + target.code, role: isGrp ? 'ليدر المجموعة' : 'ليدر السكشن', pin: target.pin }
  ];

  const reqOff = officials.find(o => o.id === requesterOfficialId) || state.currentOfficial || officials[0];
  const inputAcad = (requesterAcademicId || '').trim();
  if (!inputAcad || inputAcad !== (reqOff.academicId || '').trim()) {
    alert(`❌ فشل التحقق الأمني: الرقم الأكاديمي غير مطابق للمسؤول.`);
    return;
  }

  const inputCode = (requesterCode || '').trim().toLowerCase();
  const validCodes = [reqOff.personalPin, reqOff.pin, reqOff.officialCode, target.pin].filter(Boolean).map(c => c.toLowerCase());
  if (!inputCode || !validCodes.includes(inputCode)) {
    alert(`❌ فشل التحقق الأمني: كلمة السر أو الكود غير صحيح.`);
    return;
  }

  if (officials.length <= 1) {
    target.pin = np;
    account.pin = np;
    if (officials[0]) officials[0].pin = np;
    saveDB(DB);
    closeModal();
    alert('⚡ تم تغيير كلمة السر بنجاح! الجديدة: ' + np);
    render();
    return;
  }

  if (!Array.isArray(DB.passwordChangeRequests)) DB.passwordChangeRequests = [];
  const newReq = {
    id: 'pcr-' + Date.now() + Math.random().toString(36).substr(2, 4),
    targetType: isGrp ? 'group' : 'section',
    targetId: target.id,
    targetName: target.name,
    requestedByOfficialId: reqOff.id,
    requestedByName: reqOff.name,
    requestedByAcademicId: reqOff.academicId,
    newPin: np,
    status: 'pending',
    createdAt: new Date().toISOString(),
    approvals: officials.map(o => ({
      officialId: o.id,
      officialName: o.name,
      academicId: o.academicId,
      role: o.role,
      approved: o.id === reqOff.id,
      approvedAt: o.id === reqOff.id ? new Date().toISOString() : null
    }))
  };

  DB.passwordChangeRequests.push(newReq);
  saveDB(DB);
  closeModal();
  alert('🚀 تم تسجيل طلب تغيير كلمة السر بانتظار اعتماد باقي المسؤولين.');
  render();
}

function approvePasswordChangeRequest(requestId, officialId, officialCodeInput, academicIdInput) {
  if (!Array.isArray(DB.passwordChangeRequests)) return;
  const req = DB.passwordChangeRequests.find(r => r.id === requestId && r.status === 'pending');
  if (!req) return;

  const target = req.targetType === 'group' ? DB.groups.find(g => g.id === req.targetId) : DB.sections.find(s => s.id === req.targetId);
  if (!target) return;

  const off = (target.officials || []).find(o => o.id === officialId);
  if (!off) return;

  const acadIn = (academicIdInput || '').trim();
  if (acadIn !== (off.academicId || '').trim()) {
    alert('❌ الرقم الأكاديمي غير صحيح!');
    return;
  }

  const codeIn = (officialCodeInput || '').trim().toLowerCase();
  const validCodes = [off.personalPin, off.officialCode, off.pin, target.pin].filter(Boolean).map(c => c.toLowerCase());
  if (!validCodes.includes(codeIn)) {
    alert('❌ كود المسؤول أو الـ PIN غير صحيح!');
    return;
  }

  const app = req.approvals.find(a => a.officialId === officialId);
  if (!app || app.approved) return;

  app.approved = true;
  app.approvedAt = new Date().toISOString();

  if (req.approvals.every(a => a.approved)) {
    target.pin = req.newPin;
    if (state.currentAccount && state.currentAccount.id === target.id) {
      state.currentAccount.pin = req.newPin;
    }
    req.status = 'approved';
    saveDB(DB);
    closeModal();
    alert('🎉 اكتملت الموافقات وتم تغيير كلمة السر المشتركة للحساب!');
  } else {
    saveDB(DB);
    alert('✅ تم اعتماد موافقتك بنجاح!');
  }
  render();
}

function rejectPasswordChangeRequest(requestId) {
  if (!Array.isArray(DB.passwordChangeRequests)) return;
  const req = DB.passwordChangeRequests.find(r => r.id === requestId && r.status === 'pending');
  if (!req) return;

  const confirmAcad = prompt('🔒 أدخل رقمك الأكاديمي لتأكيد إلغاء الطلب:');
  const currentAcad = state.currentOfficial?.academicId || '';
  if (!confirmAcad || (currentAcad && confirmAcad.trim() !== currentAcad.trim())) {
    alert('❌ رقم أكاديمي غير مطابق!');
    return;
  }

  DB.passwordChangeRequests = DB.passwordChangeRequests.filter(r => r.id !== requestId);
  saveDB(DB);
  closeModal();
  alert('تم إلغاء الطلب بنجاح.');
  render();
}

function addGroupOfficial(name, academicId, phone, role, pin, officialCode) {
  if (state.userRole !== 'group_leader') return;
  const grp = DB.groups.find(g => g.id === state.currentAccount.id);
  if (!grp || !name.trim() || !academicId.trim()) return;

  const acadId = academicId.trim();
  if (!Array.isArray(grp.officials)) grp.officials = [];
  if (grp.officials.some(o => o.academicId === acadId)) {
    alert('الرقم الأكاديمي مسجل بالفعل لمسؤول آخر!');
    return;
  }

  const code = officialCode ? officialCode.trim() : 'OFF-GRP-' + acadId.slice(-4);
  const newOff = {
    id: 'grp-off-' + Date.now() + Math.random().toString(36).substr(2, 4),
    name: name.trim(),
    academicId: acadId,
    officialCode: code,
    phone: phone ? phone.trim() : '',
    role: role ? role.trim() : 'نائب ليدر المجموعة',
    personalPin: pin ? pin.trim() : (grp.pin || '1234'),
    pin: pin ? pin.trim() : grp.pin
  };

  grp.officials.push(newOff);
  saveDB(DB);
  alert(`✅ تم إضافة مسؤول المجموعة (${newOff.name}) بنجاح!`);
  render();
}

// -------------------------------------------------------------
// 10. EXPORT & IMPORT UTILITIES
// -------------------------------------------------------------
function downloadBlob(csv, filename) {
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
}

function exportStudentsDirectoryCSV() {
  const students = getFilteredDirectoryStudents();
  let csv = 'رقم الجلوس / الرقم الأكاديمي,اسم الطالب,رقم الهاتف,المجموعة,السكشن,الحالة\n';
  students.forEach(s => {
    const grp = DB.groups.find(g => g.id === s.groupId);
    const sec = DB.sections.find(x => x.id === s.sectionId);
    csv += `="${s.academicId}","${s.name}","${s.phone || ''}","${grp ? grp.name : 'غير مسكن'}","${sec ? sec.name : 'غير محدد'}","${s.status}"\n`;
  });
  downloadBlob(csv, 'BATU_Students_' + Date.now() + '.csv');
}

function exportCSV() {
  const isGrp = state.userRole === 'group_leader';
  const label = state.currentAccount.code;

  if (isGrp) {
    const sections = DB.sections.filter(s => s.groupId === state.currentAccount.id);
    const columns = DB.customColumns.filter(c => c.scope === 'group_sections' && c.ownerId === state.currentAccount.id);
    let csv = 'اسم السكشن,كود السكشن,رمز PIN,عدد الطلاب,مسؤولو السكشن,حالة الضن,المحصل الفعلي,' + columns.map(c => `"${c.title}"`).join(',') + '\n';
    sections.forEach(s => {
      const stats = getSectionDoneStats(s.id);
      const doneStatusStr = stats.isAllDone ? 'ضن بالكامل' : `${stats.percentage}% تم`;
      const officialsStr = (s.officials || []).map(o => `${o.name} (${o.role})`).join(' | ');
      let row = [`"${s.name}"`, `"${s.code}"`, `"${s.pin}"`, `"${stats.totalStudents}"`, `"${officialsStr}"`, `"${doneStatusStr}"`, `"${stats.totalPaid} ج.م"`];
      columns.forEach(c => row.push(`"${DB.customValues[c.id]?.[s.id] || ''}"`));
      csv += row.join(',') + '\n';
    });
    downloadBlob(csv, `BATU_Group_${label}_Summary.csv`);
  } else {
    const students = DB.students.filter(s => s.sectionId === state.currentAccount.id);
    const columns = DB.customColumns.filter(c => c.scope === 'section_students' && c.ownerId === state.currentAccount.id);
    let csv = 'الرقم الأكاديمي,اسم الطالب,الحالة,' + columns.map(c => `"${c.title}"`).join(',') + '\n';
    students.forEach(s => {
      let row = [`="${s.academicId}"`, `"${s.name}"`, `"${s.status}"`];
      columns.forEach(c => row.push(`"${DB.customValues[c.id]?.[s.id] || ''}"`));
      csv += row.join(',') + '\n';
    });
    downloadBlob(csv, `BATU_Section_${label}_Sheet.csv`);
  }
}

function importCSV(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    const text = evt.target.result;
    const lines = text.split('\n');
    let count = 0;
    const isGrp = state.userRole === 'group_leader';
    const grpId = isGrp ? state.currentAccount.id : state.currentAccount.groupId;
    const defaultSec = isGrp ? DB.sections.find(s => s.groupId === grpId) : state.currentAccount;

    lines.forEach((line, index) => {
      if (index === 0 && line.toLowerCase().includes('name')) return;
      const parts = line.split(',').map(p => p.trim());
      if (parts.length >= 2 && parts[0] && parts[1]) {
        const academicId = parts[0].replace(/["'=]/g, '');
        const name = parts[1].replace(/["']/g, '');
        const phone = (parts[3] || '').replace(/["']/g, '');

        if (!DB.students.some(s => s.groupId === grpId && s.academicId === academicId)) {
          DB.students.push({
            id: 'std-' + Date.now() + Math.random().toString(36).substr(2, 4),
            groupId: grpId,
            sectionId: defaultSec ? defaultSec.id : null,
            academicId,
            name,
            phone,
            status: 'Active',
            notes: isGrp ? 'استيراد ليدر المجموعة' : ('استيراد ليدر ' + defaultSec.name),
            addedByRole: isGrp ? 'group_leader' : 'section_leader',
            addedAt: new Date().toISOString()
          });
          count++;
        }
      }
    });
    saveDB(DB);
    alert(`تم استيراد ${count} طالب بنجاح!`);
    render();
  };
  reader.readAsText(file);
}

// -------------------------------------------------------------
// 11. UI MODALS & RENDERING VIEWS
// -------------------------------------------------------------
function openModal(type, data = null) { state.modal = type; state.modalData = data; render(); }
function closeModal() { state.modal = null; state.modalData = null; render(); }

function renderAuthScreen() {
  const mode = state.authMode;
  return `
    <div class="min-h-screen flex items-center justify-center p-4 bg-slate-900">
      <div class="max-w-md w-full bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-700">
        <div class="text-center mb-6">
          <div class="inline-block bg-brand-600 text-white font-black text-2xl px-4 py-2 rounded-xl mb-3 shadow">BATU</div>
          <h2 class="text-xl font-black text-white">نظام ليدرز المجموعات والسكاشن</h2>
          <p class="text-xs text-slate-400 mt-1">جامعة برج العرب التكنولوجية | تكنولوجيا المعلومات</p>
        </div>

        <div class="grid grid-cols-2 rounded-xl bg-slate-900 p-1 mb-5 border border-slate-700">
          <button onclick="state.authMode='group_login'; render();" class="py-2.5 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 ${mode.startsWith('group') ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
            <span>👥</span> ليدر المجموعة
          </button>
          <button onclick="state.authMode='section_login'; render();" class="py-2.5 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 ${mode.startsWith('section') ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
            <span>🏢</span> ليدر السكشن
          </button>
        </div>

        ${mode === 'group_login' ? `
          <form onsubmit="event.preventDefault(); loginGroupLeader(this.grpChoice.value, this.academicId.value, this.pin.value);" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">اختر المجموعة</label>
              <select name="grpChoice" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none cursor-pointer">
                ${DB.groups.map(g => `<option value="${g.id}">${g.name} (${g.code})</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">الرقم الأكاديمي للمسؤول 🆔 *</label>
              <input type="text" name="academicId" placeholder="02620202" required class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none font-mono text-center" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">رمز PIN / كود المسؤول 🔑 *</label>
              <input type="password" name="pin" placeholder="••••" required class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none font-mono text-center tracking-widest" />
            </div>
            <button type="submit" class="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-2.5 px-4 rounded-lg transition text-sm shadow-lg">دخول ليدر المجموعة</button>
          </form>
          <div class="mt-4 flex items-center justify-between text-xs">
            <button onclick="state.authMode='forgot_password'; state.forgotType='group'; render();" class="text-amber-400 hover:underline">نسيت كلمة السر؟</button>
            <button onclick="state.authMode='create_group'; render();" class="text-slate-400 hover:text-white">+ إنشاء مجموعة</button>
          </div>
        ` : ''}

        ${mode === 'section_login' ? `
          <form onsubmit="event.preventDefault(); loginSectionLeader(this.secChoice.value, this.academicId.value, this.pin.value);" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">اختر السكشن</label>
              <select name="secChoice" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none cursor-pointer">
                ${DB.sections.map(s => `<option value="${s.id}">${s.name} - كود: ${s.code}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">الرقم الأكاديمي لمسؤول السكشن 🆔 *</label>
              <input type="text" name="academicId" placeholder="02620101" required class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none font-mono text-center" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">رمز PIN / كود المسؤول 🔑 *</label>
              <input type="password" name="pin" placeholder="••••" required class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none font-mono text-center tracking-widest" />
            </div>
            <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-lg transition text-sm shadow-lg">دخول ليدر السكشن</button>
          </form>
          <div class="mt-4 text-center">
            <button onclick="state.authMode='forgot_password'; state.forgotType='section'; render();" class="text-emerald-400 text-xs hover:underline">نسيت كلمة السر؟ (استرداد الحساب)</button>
          </div>
        ` : ''}

        ${mode === 'create_group' ? `
          <h3 class="text-sm font-bold text-amber-400 mb-3">➕ إنشاء حساب مجموعة جديدة</h3>
          <form onsubmit="event.preventDefault(); createGroupAccount(this.name.value, this.code.value, this.founderName.value, this.founderAcadId.value, this.pin.value, this.founderPhone.value);" class="space-y-3">
            <input type="text" name="name" required placeholder="اسم المجموعة (مثال: Group 3)" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-xs" />
            <input type="text" name="code" required placeholder="كود المجموعة (مثال: GRP-3)" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-xs font-mono" />
            <input type="text" name="founderName" required placeholder="اسم المسؤول المؤسس" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-xs" />
            <input type="text" name="founderAcadId" required placeholder="الرقم الأكاديمي للمسؤول المؤسس" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-xs font-mono text-center" />
            <input type="tel" name="founderPhone" placeholder="رقم الهاتف" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-xs font-mono" />
            <input type="password" name="pin" required placeholder="رمز PIN" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-xs font-mono text-center" />
            <div class="flex gap-2 pt-2">
              <button type="button" onclick="state.authMode='group_login'; render();" class="w-1/3 bg-slate-700 text-white py-2 rounded-lg text-xs">رجوع</button>
              <button type="submit" class="w-2/3 bg-amber-600 text-white font-bold py-2 rounded-lg text-xs">إنشاء</button>
            </div>
          </form>
        ` : ''}

        ${mode === 'forgot_password' ? `
          <h3 class="text-sm font-bold text-amber-400 mb-3">🛡️ استرداد كلمة السر</h3>
          <form onsubmit="event.preventDefault(); recoverForgottenPassword(state.forgotType || 'group', this.targetChoice.value, this.academicId.value, this.phone.value, this.newPin.value, this.confirmPin.value);" class="space-y-3">
            <select name="targetChoice" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-xs">
              ${(state.forgotType === 'section' ? DB.sections : DB.groups).map(item => `<option value="${item.id}">${item.name}</option>`).join('')}
            </select>
            <input type="text" name="academicId" required placeholder="الرقم الأكاديمي" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-xs font-mono text-center" />
            <input type="tel" name="phone" required placeholder="رقم الهاتف المسجل" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-xs font-mono text-center" />
            <input type="password" name="newPin" required placeholder="PIN جديد" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-xs font-mono text-center" />
            <input type="password" name="confirmPin" required placeholder="تأكيد PIN" class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-xs font-mono text-center" />
            <button type="submit" class="w-full bg-amber-600 text-white font-bold py-2 rounded-lg text-xs">تأكيد الاسترداد</button>
            <div class="text-center pt-2">
              <button type="button" onclick="state.authMode='group_login'; render();" class="text-xs text-slate-400 hover:text-white underline">إلغاء والعودة</button>
            </div>
          </form>
        ` : ''}
      </div>
    </div>
  `;
}

function renderPendingPasswordBannerHTML(req) {
  const approvedCount = req.approvals.filter(a => a.approved).length;
  const isApprovedByMe = req.approvals.some(a => a.officialId === state.currentOfficial?.id && a.approved);

  return `
    <div class="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white p-4 rounded-2xl shadow-lg border border-amber-400 flex flex-wrap items-center justify-between gap-3 mb-5">
      <div>
        <div class="flex items-center gap-2">
          <span class="font-extrabold text-sm sm:text-base">طلب تغيير كلمة سر الحساب معلق!</span>
          <span class="bg-white/25 px-2.5 py-0.5 rounded-full text-xs font-bold font-mono">الموافقات: ${approvedCount}/${req.approvals.length}</span>
        </div>
        <p class="text-xs text-amber-100 mt-1">طلب المسؤول <strong>${req.requestedByName}</strong> تغيير PIN إلى (${req.newPin}).</p>
      </div>
      <button onclick="openModal('change_password')" class="bg-white text-amber-900 font-black px-4 py-2 rounded-xl text-xs shadow hover:bg-amber-50">
        ${!isApprovedByMe ? 'موافقة وتأكيد الطلب ⚡' : 'عرض التفاصيل'}
      </button>
    </div>
  `;
}

function renderActiveTabContent() {
  const pendingReq = (DB.passwordChangeRequests || []).find(r => r.targetId === state.currentAccount.id && r.status === 'pending');
  const bannerHtml = pendingReq ? renderPendingPasswordBannerHTML(pendingReq) : '';

  let mainHtml = '';
  if (state.userRole === 'group_leader') {
    if (state.activeTab === 'home') mainHtml = renderHomeHubView();
    else if (state.activeTab === 'grid') mainHtml = renderGroupSectionsGridView();
    else if (state.activeTab === 'tasks') mainHtml = renderGroupTasksView();
    else if (state.activeTab === 'students') mainHtml = renderGroupStudentsDirectoryView();
    else if (state.activeTab === 'dashboard') mainHtml = renderGroupDashboardView();
  } else {
    if (state.activeTab === 'home') mainHtml = renderHomeHubView();
    else if (state.activeTab === 'grid') mainHtml = renderSectionStudentsGridView();
    else if (state.activeTab === 'assignments') mainHtml = renderAssignmentsView();
    else if (state.activeTab === 'attendance') mainHtml = renderAttendanceView();
    else if (state.activeTab === 'students') mainHtml = renderGroupStudentsDirectoryView();
    else if (state.activeTab === 'dashboard') mainHtml = renderSectionDashboardView();
  }
  return bannerHtml + mainHtml;
}

function renderCellEditor(col, targetId) {
  const val = DB.customValues[col.id]?.[targetId] || '';

  if (col.type === 'status') {
    let badgeColor = 'bg-slate-100 dark:bg-slate-700 text-slate-600';
    if (val === 'تمام') badgeColor = 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300';
    else if (val === 'مش تمام') badgeColor = 'bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300';
    else if (val === 'لسه') badgeColor = 'bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300';

    return `
      <select onchange="updateCellValue('${col.id}', '${targetId}', this.value)" class="w-full text-xs font-bold py-1 px-2 rounded cursor-pointer ${badgeColor}">
        <option value="">--</option>
        <option value="تمام" ${val === 'تمام' ? 'selected' : ''}>تمام</option>
        <option value="مش تمام" ${val === 'مش تمام' ? 'selected' : ''}>مش تمام</option>
        <option value="لسه" ${val === 'لسه' ? 'selected' : ''}>لسه</option>
      </select>
    `;
  }
  if (col.type === 'payment') {
    return `
      <div class="flex items-center gap-1">
        <input type="number" value="${val}" placeholder="0" onblur="updateCellValue('${col.id}', '${targetId}', this.value)" class="w-20 text-xs py-1 px-2 font-mono bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-center" />
        <span class="text-[10px] text-slate-400">ج.م</span>
      </div>
    `;
  }
  if (col.type === 'checkbox') {
    return `
      <div class="flex justify-center items-center py-1">
        <input type="checkbox" ${val === 'true' ? 'checked' : ''} onchange="updateCellValue('${col.id}', '${targetId}', this.checked ? 'true' : 'false')" class="w-4 h-4 text-brand-600 rounded cursor-pointer" />
      </div>
    `;
  }
  return `
    <input type="text" value="${val}" onblur="updateCellValue('${col.id}', '${targetId}', this.value)" class="w-full text-xs py-1 px-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded" />
  `;
}

function renderTableOnly() {
  const container = document.getElementById('table-container');
  if (!container) return;

  if (state.userRole === 'group_leader') {
    const sections = DB.sections.filter(s => s.groupId === state.currentAccount.id).filter(s => 
      !state.searchQuery || s.name.includes(state.searchQuery) || s.code.includes(state.searchQuery)
    );
    const columns = DB.customColumns.filter(c => c.scope === 'group_sections' && c.ownerId === state.currentAccount.id);
    container.innerHTML = renderGroupSectionsTableHTML(sections, columns);
  } else {
    const students = DB.students.filter(s => s.sectionId === state.currentAccount.id).filter(s => 
      !state.searchQuery || s.name.includes(state.searchQuery) || s.academicId.includes(state.searchQuery)
    );
    const columns = DB.customColumns.filter(c => c.scope === 'section_students' && c.ownerId === state.currentAccount.id);
    container.innerHTML = renderSectionStudentsTableHTML(students, columns);
  }
}

// -------------------------------------------------------------
// 12. VIEWS (Home, Sections Grid, Students Grid, Dashboard)
// -------------------------------------------------------------
function renderHomeHubView() {
  const account = state.currentAccount;
  const isGrp = state.userRole === 'group_leader';
  const target = isGrp ? DB.groups.find(g => g.id === account.id) : DB.sections.find(s => s.id === account.id);
  const currentOfficial = state.currentOfficial || target?.officials?.[0] || null;
  const officials = target?.officials || [];

  let totalPaid = 0;
  let paidStudentsCount = 0;
  let totalStudentsCount = 0;

  if (isGrp) {
    DB.sections.filter(s => s.groupId === account.id).forEach(sec => {
      const st = getSectionDoneStats(sec.id);
      totalPaid += st.totalPaid;
      paidStudentsCount += st.paidStudents;
      totalStudentsCount += st.totalStudents;
    });
  } else {
    const st = getSectionDoneStats(account.id);
    totalPaid = st.totalPaid;
    paidStudentsCount = st.paidStudents;
    totalStudentsCount = st.totalStudents;
  }

  return `
    <div class="space-y-6">
      <div class="bg-gradient-to-r ${isGrp ? 'from-amber-600 via-amber-700 to-amber-900' : 'from-emerald-600 via-emerald-700 to-teal-900'} text-white p-6 rounded-3xl shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 class="text-xl sm:text-2xl font-black">البيت الرئيسي | ${account.name} (${account.code})</h1>
          <p class="text-xs text-white/80 mt-1">المسؤول المتصل: <strong class="underline">${currentOfficial ? currentOfficial.name : account.name}</strong> (${currentOfficial ? currentOfficial.role : ''})</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="openModal('change_personal_password')" class="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow">🔐 كلمة سري الشخصية</button>
          <button onclick="openModal('change_password')" class="bg-white/20 hover:bg-white/30 text-white font-bold text-xs px-3.5 py-2 rounded-xl">🔑 كلمة سر الحساب</button>
          <button onclick="logout()" class="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow">🚪 تسجيل الخروج</button>
        </div>
      </div>

      <div class="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 rounded-2xl">
          <span class="text-xs font-bold text-emerald-800 dark:text-emerald-300">💵 المحصل الفعلي</span>
          <div class="text-xl font-black font-mono text-emerald-600 dark:text-emerald-400 mt-1">${totalPaid.toLocaleString('ar-EG')} ج.م</div>
        </div>
        <div class="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 rounded-2xl">
          <span class="text-xs font-bold text-amber-800 dark:text-amber-300">👥 المسددين</span>
          <div class="text-xl font-black font-mono text-amber-600 dark:text-amber-400 mt-1">${paidStudentsCount} / ${totalStudentsCount}</div>
        </div>
        <div class="p-4 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 rounded-2xl">
          <span class="text-xs font-bold text-indigo-800 dark:text-indigo-300">📊 نسبة التحصيل</span>
          <div class="text-xl font-black font-mono text-indigo-600 dark:text-indigo-400 mt-1">${totalStudentsCount > 0 ? Math.round((paidStudentsCount / totalStudentsCount) * 100) : 0}%</div>
        </div>
        <div class="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 rounded-2xl">
          <span class="text-xs font-bold text-rose-800 dark:text-rose-300">⏳ غير مسددين</span>
          <div class="text-xl font-black font-mono text-rose-600 dark:text-rose-400 mt-1">${Math.max(0, totalStudentsCount - paidStudentsCount)}</div>
        </div>
      </div>

      <div class="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-4">
        <div class="flex justify-between items-center border-b pb-3">
          <h2 class="text-base font-black text-slate-800 dark:text-white">مسؤولو الحساب وبياناتهم</h2>
          ${isGrp ? `<button onclick="openModal('manage_group_officials')" class="text-xs font-bold bg-indigo-600 text-white px-3 py-1.5 rounded-lg">+ إضافة مسؤول</button>` : ''}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${officials.map(off => {
            const isMe = currentOfficial && currentOfficial.id === off.id;
            const elemId = 'pin-display-' + off.id;
            return `
              <div class="p-4 rounded-2xl border ${isMe ? 'border-emerald-500 bg-emerald-50/20' : 'border-slate-200 bg-slate-50 dark:bg-slate-900'}">
                <div class="flex justify-between items-center mb-2">
                  <div class="font-bold text-sm">${off.name} <span class="text-xs text-amber-600">(${off.role})</span></div>
                  ${isMe ? '<span class="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full">أنت</span>' : ''}
                </div>
                <div class="text-xs space-y-1 font-mono text-slate-500">
                  <div>🆔 الأكاديمي: ${off.academicId}</div>
                  <div>📱 هاتف: ${off.phone || 'غير مسجل'}</div>
                  <div class="flex items-center gap-2 pt-1 border-t">
                    <span>كلمة السر:</span>
                    ${isMe ? `
                      <span id="${elemId}" data-shown="false" class="font-bold text-emerald-600">••••</span>
                      <button onclick="togglePinVisibility('${elemId}', '${off.personalPin || off.pin}')" class="text-[10px] bg-slate-200 px-2 py-0.5 rounded">إظهار</button>
                    ` : '<span class="text-slate-400 italic">محمية ومخفية</span>'}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderGroupSectionsGridView() {
  const sections = DB.sections.filter(s => s.groupId === state.currentAccount.id);
  const columns = DB.customColumns.filter(c => c.scope === 'group_sections' && c.ownerId === state.currentAccount.id);

  return `
    <div class="space-y-4">
      <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 flex flex-wrap gap-2 items-center justify-between">
        <input type="text" placeholder="بحث بالسكشن أو الكود..." value="${state.searchQuery}" oninput="state.searchQuery=this.value; renderTableOnly();" class="bg-slate-50 border p-2 rounded-lg text-xs" />
        <div class="flex gap-2">
          <button onclick="openModal('add_student_quick')" class="bg-amber-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">+ طالب للمجموعة</button>
          <button onclick="openModal('add_group_task')" class="bg-purple-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">+ نشر تاسك للسكاشن</button>
          <button onclick="openModal('add_column')" class="bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold">+ عمود متابعة</button>
          <button onclick="openModal('add_section_to_group')" class="bg-brand-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">+ سكشن جديد</button>
          <button onclick="exportCSV()" class="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold">📥 تصدير Excel</button>
        </div>
      </div>
      <div id="table-container" class="bg-white rounded-xl shadow-sm overflow-hidden">
        ${renderGroupSectionsTableHTML(sections, columns)}
      </div>
    </div>
  `;
}

function renderGroupSectionsTableHTML(sections, columns) {
  return `
    <div class="overflow-x-auto">
      <table class="w-full text-right text-xs">
        <thead class="bg-slate-100 border-b">
          <tr>
            <th class="p-3 sticky-col bg-slate-100">السكشن</th>
            <th class="p-3">كود</th>
            <th class="p-3">الطلاب</th>
            <th class="p-3">المسؤولين</th>
            <th class="p-3">الإنجاز والضن</th>
            <th class="p-3">المحصل</th>
            ${columns.map(col => `<th class="p-3">${col.title} <button onclick="deleteCustomColumn('${col.id}')" class="text-rose-500">✕</button></th>`).join('')}
            <th class="p-3 text-center">إجراءات</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          ${sections.map(sec => {
            const stats = getSectionDoneStats(sec.id);
            return `
              <tr>
                <td class="p-3 sticky-col bg-white font-bold">${sec.name}</td>
                <td class="p-3 font-mono font-bold text-amber-600">${sec.code}</td>
                <td class="p-3 font-mono">${stats.totalStudents}</td>
                <td class="p-3">
                  <button onclick="openModal('manage_officials', '${sec.id}')" class="bg-indigo-50 text-indigo-700 font-bold px-2 py-1 rounded border border-indigo-200">
                    👥 ${sec.officials?.length || 0} تعيين
                  </button>
                </td>
                <td class="p-3 font-bold ${stats.isAllDone ? 'text-emerald-600' : 'text-amber-600'}">${stats.isAllDone ? '✅ 100%' : stats.percentage + '%'}</td>
                <td class="p-3 font-mono font-bold text-emerald-600">${stats.totalPaid} ج.م</td>
                ${columns.map(col => `<td class="p-2">${renderCellEditor(col, sec.id)}</td>`).join('')}
                <td class="p-3 text-center"><button onclick="deleteSection('${sec.id}')" class="text-red-500 font-bold">حذف</button></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderSectionStudentsGridView() {
  const students = DB.students.filter(s => s.sectionId === state.currentAccount.id);
  const columns = DB.customColumns.filter(c => c.scope === 'section_students' && c.ownerId === state.currentAccount.id);

  return `
    <div class="space-y-4">
      <div class="bg-white p-4 rounded-xl shadow-sm border flex flex-wrap gap-2 items-center justify-between">
        <input type="text" placeholder="بحث بالاسم أو الرقم الأكاديمي..." value="${state.searchQuery}" oninput="state.searchQuery=this.value; renderTableOnly();" class="border p-2 rounded-lg text-xs" />
        <div class="flex gap-2">
          <button onclick="openModal('add_student')" class="bg-brand-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">+ إضافة طالب لسكشني</button>
          <button onclick="openModal('add_column')" class="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">+ عمود متابعة</button>
          <button onclick="exportCSV()" class="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold">📥 تصدير Excel</button>
        </div>
      </div>
      <div id="table-container" class="bg-white rounded-xl shadow-sm overflow-hidden">
        ${renderSectionStudentsTableHTML(students, columns)}
      </div>
    </div>
  `;
}

function renderSectionStudentsTableHTML(students, columns) {
  return `
    <div class="overflow-x-auto">
      <table class="w-full text-right text-xs">
        <thead class="bg-slate-100 border-b">
          <tr>
            <th class="p-3 sticky-col bg-slate-100">الرقم الأكاديمي</th>
            <th class="p-3 sticky-col-2 bg-slate-100">الاسم</th>
            <th class="p-3">هاتف</th>
            ${columns.map(col => `<th class="p-3">${col.title} <button onclick="deleteCustomColumn('${col.id}')" class="text-rose-500">✕</button></th>`).join('')}
            <th class="p-3 text-center">إجراءات</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          ${students.map(std => `
            <tr>
              <td class="p-3 font-mono font-bold sticky-col bg-white text-emerald-600">${std.academicId}</td>
              <td class="p-3 sticky-col-2 bg-white font-bold">${std.name}</td>
              <td class="p-3 font-mono">${std.phone || '-'}</td>
              ${columns.map(col => `<td class="p-2">${renderCellEditor(col, std.id)}</td>`).join('')}
              <td class="p-3 text-center"><button onclick="deleteStudent('${std.id}')" class="text-rose-500 font-bold">حذف</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderGroupTasksView() {
  const groupTasks = DB.assignments.filter(a => a.groupId === state.currentAccount.id);
  return `
    <div class="space-y-4">
      <div class="flex justify-between items-center bg-white p-4 rounded-xl border">
        <h2 class="text-base font-bold">📢 تكليفات وتاسكات المجموعة</h2>
        <button onclick="openModal('add_group_task')" class="bg-amber-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">+ نشر تاسك جديد</button>
      </div>
      ${groupTasks.map(task => `
        <div class="bg-white p-4 rounded-xl border shadow-sm space-y-2">
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-sm">${task.title}</h3>
            <button onclick="deleteGroupTask('${task.id}')" class="text-rose-500 text-xs font-bold">حذف التاسك</button>
          </div>
          <p class="text-xs text-slate-500">${task.instructions || 'بدون تعليمات إضافية'}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function renderAssignmentsView() {
  const assignments = DB.assignments.filter(a => a.sectionId === state.currentAccount.id || a.groupId === state.currentAccount.groupId);
  const students = DB.students.filter(s => s.sectionId === state.currentAccount.id);

  return `
    <div class="space-y-4">
      <div class="flex justify-between items-center bg-white p-4 rounded-xl border">
        <h2 class="text-base font-bold">التكليفات والشيتات</h2>
        <button onclick="openModal('add_assignment')" class="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">+ تكليف للسكشن</button>
      </div>
      ${assignments.map(asg => {
        const subs = DB.submissions[asg.id] || {};
        return `
          <div class="bg-white p-4 rounded-xl border shadow-sm space-y-3">
            <div class="flex justify-between items-center border-b pb-2">
              <h3 class="font-bold text-sm">${asg.title}</h3>
              <span class="text-xs text-slate-400">الدرجة: ${asg.maxScore}</span>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-right text-xs">
                <thead><tr class="border-b"><th class="p-1">الطالب</th><th class="p-1">الحالة</th><th class="p-1">الدرجة</th></tr></thead>
                <tbody>
                  ${students.map(s => {
                    const sub = subs[s.id] || { status: 'pending', score: '' };
                    return `
                      <tr>
                        <td class="p-1">${s.name}</td>
                        <td class="p-1">
                          <select onchange="updateSubmission('${asg.id}', '${s.id}', this.value, '${sub.score ?? ''}')" class="p-1 text-xs border rounded">
                            <option value="completed" ${sub.status === 'completed' ? 'selected' : ''}>تم التسليم ✅</option>
                            <option value="pending" ${sub.status === 'pending' ? 'selected' : ''}>معلق ⏳</option>
                          </select>
                        </td>
                        <td class="p-1"><input type="number" value="${sub.score ?? ''}" onblur="updateSubmission('${asg.id}', '${s.id}', '${sub.status}', this.value)" class="w-16 border rounded p-1 text-center font-mono" /></td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderAttendanceView() {
  const sessions = DB.attendanceSessions.filter(s => s.sectionId === state.currentAccount.id);
  const students = DB.students.filter(s => s.sectionId === state.currentAccount.id);
  const activeSession = sessions[0];

  return `
    <div class="space-y-4">
      <div class="flex justify-between items-center bg-white p-4 rounded-xl border">
        <h2 class="text-base font-bold">الحضور والغياب</h2>
        <button onclick="openModal('add_session')" class="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">+ جلسة معمل جديدة</button>
      </div>
      ${activeSession ? `
        <div class="bg-white p-4 rounded-xl border space-y-3">
          <div class="flex justify-between items-center border-b pb-2">
            <div>
              <div class="font-bold text-sm">${activeSession.title}</div>
              <div class="text-xs text-slate-400 font-mono">${activeSession.date}</div>
            </div>
            <div class="flex gap-2">
              <button onclick="saveAttendanceBulk('${activeSession.id}', 'present')" class="bg-emerald-600 text-white text-xs px-2 py-1 rounded">الكل حاضر</button>
              <button onclick="saveAttendanceBulk('${activeSession.id}', 'absent')" class="bg-red-600 text-white text-xs px-2 py-1 rounded">الكل غائب</button>
            </div>
          </div>
          <table class="w-full text-right text-xs">
            <tbody>
              ${students.map(s => {
                const rec = DB.attendanceRecords[activeSession.id]?.[s.id] || 'present';
                return `
                  <tr class="border-b">
                    <td class="p-2 font-bold">${s.name}</td>
                    <td class="p-2 text-center">
                      <button onclick="updateSingleAttendance('${activeSession.id}', '${s.id}', 'present')" class="px-2 py-0.5 rounded text-xs ${rec === 'present' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-100'}">حاضر</button>
                      <button onclick="updateSingleAttendance('${activeSession.id}', '${s.id}', 'absent')" class="px-2 py-0.5 rounded text-xs ${rec === 'absent' ? 'bg-rose-600 text-white font-bold' : 'bg-slate-100'}">غائب</button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      ` : '<div class="p-6 text-center text-slate-400 bg-white rounded-xl">لا توجد جلسات معمل بعد.</div>'}
    </div>
  `;
}

function renderGroupStudentsDirectoryView() {
  const filtered = getFilteredDirectoryStudents();
  return `
    <div class="space-y-4">
      <div class="bg-white p-4 rounded-xl border flex flex-wrap gap-2 justify-between items-center">
        <input type="text" placeholder="بحث بالاسم أو الرقم أو التليفون..." value="${state.searchQuery}" oninput="state.searchQuery=this.value; renderStudentsTableOnly();" class="border p-2 rounded-lg text-xs" />
        <div class="flex gap-2">
          ${state.userRole === 'group_leader' ? `
            <button onclick="openModal('add_student_quick')" class="bg-amber-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">+ إضافة طالب</button>
            <button onclick="openModal('bulk_paste_students')" class="bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">📋 لصق دفعة</button>
          ` : ''}
          <button onclick="exportStudentsDirectoryCSV()" class="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold">📤 تصدير الكشف</button>
        </div>
      </div>
      <div id="students-table-container" class="bg-white rounded-xl shadow-sm overflow-hidden">
        ${renderStudentsTableHTML(filtered)}
      </div>
    </div>
  `;
}

function renderStudentsBatchBarHTML(filtered) {
  if (state.userRole !== 'group_leader' || state.selectedStudentIds.length === 0) return '';
  return `
    <div class="bg-amber-600 text-white p-3 rounded-xl flex justify-between items-center mb-3">
      <div class="text-xs font-bold">تم تحديد ${state.selectedStudentIds.length} طالب</div>
      <div class="flex gap-2">
        <button onclick="applyBulkAssignGroup()" class="bg-emerald-600 text-white px-3 py-1 rounded text-xs font-bold">تسكين في مجموعتي ⚡</button>
        <button onclick="clearSelectedStudents()" class="bg-black/20 text-white px-2 py-1 rounded text-xs">إلغاء</button>
      </div>
    </div>
  `;
}

function renderStudentsTableHTML(students) {
  const isGrp = state.userRole === 'group_leader';
  return `
    <div class="overflow-x-auto">
      <table class="w-full text-right text-xs">
        <thead class="bg-slate-100 border-b">
          <tr>
            ${isGrp ? '<th class="p-3 w-8"></th>' : ''}
            <th class="p-3">رقم الجلوس</th>
            <th class="p-3">اسم الطالب</th>
            <th class="p-3">الهاتف</th>
            <th class="p-3">المجموعة</th>
            <th class="p-3">السكشن</th>
            <th class="p-3 text-center">إجراءات</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          ${students.map(s => {
            const grp = DB.groups.find(g => g.id === s.groupId);
            const sec = DB.sections.find(x => x.id === s.sectionId);
            return `
              <tr>
                ${isGrp ? `
                  <td class="p-3 text-center">
                    <input type="checkbox" onchange="toggleSelectStudent('${s.id}', this.checked)" ${state.selectedStudentIds.includes(s.id) ? 'checked' : ''} />
                  </td>
                ` : ''}
                <td class="p-3 font-mono font-bold text-amber-600">${s.academicId}</td>
                <td class="p-3 font-bold">${s.name}</td>
                <td class="p-3 font-mono">${s.phone || '-'}</td>
                <td class="p-3">${grp ? grp.name : '<span class="text-rose-500">غير مسكن</span>'}</td>
                <td class="p-3">${sec ? sec.name : '<span class="text-amber-500">في انتظار التسكين</span>'}</td>
                <td class="p-3 text-center">
                  ${isGrp ? `<button onclick="openModal('edit_student', '${s.id}')" class="text-indigo-600 font-bold px-1">تعديل</button>` : ''}
                  <button onclick="deleteStudent('${s.id}')" class="text-rose-500 font-bold px-1">حذف</button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderGroupDashboardView() {
  const students = DB.students.filter(s => s.groupId === state.currentAccount.id);
  const sections = DB.sections.filter(s => s.groupId === state.currentAccount.id);
  return `
    <div class="space-y-4">
      <h2 class="text-base font-bold">إحصائيات المجموعة</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white p-4 rounded-xl border">طلاب المجموعة: <strong class="font-mono text-lg">${students.length}</strong></div>
        <div class="bg-white p-4 rounded-xl border">عدد السكاشن: <strong class="font-mono text-lg">${sections.length}</strong></div>
      </div>
      <div class="bg-white p-4 rounded-xl border h-64"><canvas id="groupDistributionChart"></canvas></div>
    </div>
  `;
}

function renderSectionDashboardView() {
  const students = DB.students.filter(s => s.sectionId === state.currentAccount.id);
  return `
    <div class="space-y-4">
      <h2 class="text-base font-bold">إحصائيات السكشن</h2>
      <div class="bg-white p-4 rounded-xl border">إجمالي الطلاب: <strong class="font-mono text-lg">${students.length}</strong></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white p-4 rounded-xl border h-64"><canvas id="sectionSubmissionsChart"></canvas></div>
        <div class="bg-white p-4 rounded-xl border h-64"><canvas id="sectionAttendanceChart"></canvas></div>
      </div>
    </div>
  `;
}

function initDashboardCharts() {
  if (state.userRole === 'group_leader') {
    const sections = DB.sections.filter(s => s.groupId === state.currentAccount.id);
    const ctx = document.getElementById('groupDistributionChart')?.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: sections.map(s => s.name),
          datasets: [{ label: 'الطلاب', data: sections.map(s => DB.students.filter(std => std.sectionId === s.id).length), backgroundColor: '#d97706' }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
    }
  } else {
    const students = DB.students.filter(s => s.sectionId === state.currentAccount.id);
    const ctx1 = document.getElementById('sectionSubmissionsChart')?.getContext('2d');
    if (ctx1) {
      new Chart(ctx1, {
        type: 'doughnut',
        data: {
          labels: ['المقيدين'],
          datasets: [{ data: [students.length], backgroundColor: ['#059669'] }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
    }
  }
}

// -------------------------------------------------------------
// 13. MODALS RENDERING
// -------------------------------------------------------------
function renderModalContent() {
  if (!state.modal) return '';
  const isGrp = state.userRole === 'group_leader';
  const sections = isGrp ? DB.sections.filter(s => s.groupId === state.currentAccount.id) : [];

  return `
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div class="bg-white dark:bg-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl border text-right max-h-[90vh] overflow-y-auto">
        
        ${state.modal === 'add_group_task' ? `
          <h3 class="text-base font-bold mb-3">📢 نشر تاسك لجميع السكاشن</h3>
          <form onsubmit="event.preventDefault(); createGroupTask(this.title.value, this.deadline.value, this.maxScore.value, this.instructions.value);" class="space-y-3">
            <input type="text" name="title" required placeholder="عنوان التاسك" class="w-full border p-2 rounded text-xs" />
            <input type="date" name="deadline" class="w-full border p-2 rounded text-xs" />
            <input type="number" name="maxScore" value="10" placeholder="الدرجة" class="w-full border p-2 rounded text-xs" />
            <textarea name="instructions" placeholder="التعليمات" class="w-full border p-2 rounded text-xs"></textarea>
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" onclick="closeModal()" class="px-3 py-1 text-xs">إلغاء</button>
              <button type="submit" class="bg-amber-600 text-white px-4 py-1.5 rounded text-xs font-bold">نشر</button>
            </div>
          </form>
        ` : ''}

        ${state.modal === 'manage_officials' && state.modalData ? (() => {
          const sec = DB.sections.find(s => s.id === state.modalData);
          if (!sec) return '';
          return `
            <h3 class="text-base font-bold mb-3">إدارة مسؤولي ${sec.name}</h3>
            <div class="space-y-2 mb-3">
              ${(sec.officials || []).map(o => `
                <div class="p-2 border rounded flex justify-between items-center text-xs">
                  <div>${o.name} (${o.role})</div>
                  <div class="flex gap-1">
                    <button onclick="resetSectionOfficialPin('${sec.id}', '${o.id}')" class="text-amber-600">PIN</button>
                    <button onclick="deleteSectionOfficial('${sec.id}', '${o.id}')" class="text-rose-600">حذف</button>
                  </div>
                </div>
              `).join('')}
            </div>
            <form onsubmit="event.preventDefault(); addSectionOfficial('${sec.id}', this.offName.value, this.offAcadId.value, this.offPhone.value, this.offRole.value, this.offPin.value); this.reset();" class="space-y-2 border-t pt-2">
              <input type="text" name="offName" required placeholder="الاسم" class="w-full border p-1 text-xs" />
              <input type="text" name="offAcadId" required placeholder="الرقم الأكاديمي" class="w-full border p-1 text-xs font-mono" />
              <input type="text" name="offRole" value="ليدر السكشن" placeholder="الدور" class="w-full border p-1 text-xs" />
              <input type="tel" name="offPhone" placeholder="الهاتف" class="w-full border p-1 text-xs" />
              <input type="text" name="offPin" value="${sec.pin}" required placeholder="PIN" class="w-full border p-1 text-xs font-mono" />
              <button type="submit" class="w-full bg-indigo-600 text-white py-1 rounded text-xs font-bold">+ تعيين مسؤول</button>
            </form>
            <div class="pt-2 text-left"><button onclick="closeModal()" class="text-xs text-slate-500">إغلاق</button></div>
          `;
        })() : ''}

        ${state.modal === 'add_student' ? `
          <h3 class="text-base font-bold mb-3">إضافة طالب لسكشنك</h3>
          <form onsubmit="event.preventDefault(); addStudent(this.name.value, this.academicId.value, '', this.phone.value);" class="space-y-3">
            <input type="text" name="name" required placeholder="الاسم" class="w-full border p-2 rounded text-xs" />
            <input type="text" name="academicId" required placeholder="الرقم الأكاديمي" class="w-full border p-2 rounded text-xs font-mono" />
            <input type="tel" name="phone" placeholder="الهاتف" class="w-full border p-2 rounded text-xs font-mono" />
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" onclick="closeModal()" class="px-3 py-1 text-xs">إلغاء</button>
              <button type="submit" class="bg-brand-600 text-white px-4 py-1.5 rounded text-xs font-bold">حفظ</button>
            </div>
          </form>
        ` : ''}

        ${state.modal === 'add_student_quick' ? `
          <h3 class="text-base font-bold mb-3">إضافة طالب إلى ${state.currentAccount.name}</h3>
          <form onsubmit="event.preventDefault(); addStudentQuick(this.academicId.value, this.name.value, this.phone.value);" class="space-y-3">
            <input type="text" name="academicId" required placeholder="رقم الجلوس / الرقم الأكاديمي" class="w-full border p-2 rounded text-xs font-mono" />
            <input type="text" name="name" required placeholder="اسم الطالب" class="w-full border p-2 rounded text-xs" />
            <input type="tel" name="phone" placeholder="رقم الهاتف" class="w-full border p-2 rounded text-xs font-mono" />
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" onclick="closeModal()" class="px-3 py-1 text-xs">إلغاء</button>
              <button type="submit" class="bg-amber-600 text-white px-4 py-1.5 rounded text-xs font-bold">تسكين فوري ⚡</button>
            </div>
          </form>
        ` : ''}

        ${state.modal === 'bulk_paste_students' ? `
          <h3 class="text-base font-bold mb-2">لصق دفعة طلاب</h3>
          <form onsubmit="event.preventDefault(); processBulkPasteStudents(this.rawText.value);" class="space-y-3">
            <textarea name="rawText" rows="6" required placeholder="02620101 أحمد محمد 01012345678" class="w-full border p-2 rounded text-xs font-mono"></textarea>
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" onclick="closeModal()" class="px-3 py-1 text-xs">إلغاء</button>
              <button type="submit" class="bg-indigo-600 text-white px-4 py-1.5 rounded text-xs font-bold">استيراد وتسكين</button>
            </div>
          </form>
        ` : ''}

        ${state.modal === 'add_column' ? `
          <h3 class="text-base font-bold mb-3">إضافة عمود متابعة</h3>
          <form onsubmit="event.preventDefault(); addCustomColumn(this.title.value, this.type.value, this.options.value);" class="space-y-3">
            <input type="text" name="title" required placeholder="اسم العمود" class="w-full border p-2 rounded text-xs" />
            <select name="type" class="w-full border p-2 rounded text-xs">
              <option value="status">حالة (تمام / مش تمام / لسه)</option>
              <option value="payment">دفع مالي (ج.م)</option>
              <option value="checkbox">علامة صح (Check)</option>
              <option value="text">نص وملاحظات</option>
            </select>
            <input type="text" name="options" placeholder="الخيارات إذا أردت تخصيصها" class="w-full border p-2 rounded text-xs" />
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" onclick="closeModal()" class="px-3 py-1 text-xs">إلغاء</button>
              <button type="submit" class="bg-brand-600 text-white px-4 py-1.5 rounded text-xs font-bold">إضافة</button>
            </div>
          </form>
        ` : ''}

        ${state.modal === 'add_section_to_group' ? `
          <h3 class="text-base font-bold mb-3">إضافة سكشن جديد لمجموعتك</h3>
          <form onsubmit="event.preventDefault(); createSectionAccount('${state.currentAccount.id}', this.name.value, this.code.value, this.pin.value, this.leaderName.value, this.phone.value);" class="space-y-3">
            <input type="text" name="name" required placeholder="اسم السكشن (مثلاً: سكشن 6)" class="w-full border p-2 rounded text-xs" />
            <input type="text" name="code" required placeholder="الكود (SEC-6)" class="w-full border p-2 rounded text-xs font-mono" />
            <input type="password" name="pin" required placeholder="رمز PIN" class="w-full border p-2 rounded text-xs font-mono" />
            <input type="text" name="leaderName" placeholder="اسم ليدر السكشن" class="w-full border p-2 rounded text-xs" />
            <input type="tel" name="phone" placeholder="رقم هاتف ليدر السكشن" class="w-full border p-2 rounded text-xs font-mono" />
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" onclick="closeModal()" class="px-3 py-1 text-xs">إلغاء</button>
              <button type="submit" class="bg-amber-600 text-white px-4 py-1.5 rounded text-xs font-bold">إنشاء</button>
            </div>
          </form>
        ` : ''}

        ${state.modal === 'change_personal_password' && state.currentOfficial ? `
          <h3 class="text-base font-bold mb-3">🔐 كلمة سري الشخصية</h3>
          <form onsubmit="event.preventDefault(); updateMyPersonalPassword(this.currentPin.value, this.newPersonalPin.value, this.confirmPersonalPin.value, this.newOfficialCode.value);" class="space-y-3">
            <input type="password" name="currentPin" required placeholder="كلمة السر الحالية للتأكيد" class="w-full border p-2 rounded text-xs font-mono text-center" />
            <input type="password" name="newPersonalPin" required placeholder="كلمة السر الجديدة" class="w-full border p-2 rounded text-xs font-mono text-center" />
            <input type="password" name="confirmPersonalPin" required placeholder="تأكيد كلمة السر" class="w-full border p-2 rounded text-xs font-mono text-center" />
            <input type="text" name="newOfficialCode" value="${state.currentOfficial.officialCode || ''}" placeholder="كود المسؤول الأمني" class="w-full border p-2 rounded text-xs font-mono" />
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" onclick="closeModal()" class="px-3 py-1 text-xs">إلغاء</button>
              <button type="submit" class="bg-emerald-600 text-white px-4 py-1.5 rounded text-xs font-bold">حفظ</button>
            </div>
          </form>
        ` : ''}

        ${state.modal === 'change_password' && state.currentAccount ? `
          <h3 class="text-base font-bold mb-3">🔑 تغيير كلمة سر الحساب</h3>
          <form onsubmit="event.preventDefault(); requestPasswordChange(this.newPin.value, this.confirmPin.value, state.currentOfficial?.id, this.requesterAcademicId.value, this.requesterCode.value);" class="space-y-3">
            <input type="text" name="requesterAcademicId" value="${state.currentOfficial?.academicId || ''}" required placeholder="رقمك الأكاديمي للتأكيد" class="w-full border p-2 rounded text-xs font-mono text-center" />
            <input type="password" name="requesterCode" required placeholder="كودك أو الـ PIN الحالي" class="w-full border p-2 rounded text-xs font-mono text-center" />
            <input type="text" name="newPin" required placeholder="PIN الجديد" class="w-full border p-2 rounded text-xs font-mono text-center" />
            <input type="text" name="confirmPin" required placeholder="تأكيد PIN الجديد" class="w-full border p-2 rounded text-xs font-mono text-center" />
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" onclick="closeModal()" class="px-3 py-1 text-xs">إلغاء</button>
              <button type="submit" class="bg-brand-600 text-white px-4 py-1.5 rounded text-xs font-bold">طلب التغيير</button>
            </div>
          </form>
        ` : ''}

        ${state.modal === 'add_assignment' ? `
          <h3 class="text-base font-bold mb-3">إضافة تكليف لسكشنك</h3>
          <form onsubmit="event.preventDefault(); createAssignment(this.title.value, this.deadline.value, this.maxScore.value);" class="space-y-3">
            <input type="text" name="title" required placeholder="عنوان التكليف" class="w-full border p-2 rounded text-xs" />
            <input type="number" name="maxScore" value="10" placeholder="الدرجة القصوى" class="w-full border p-2 rounded text-xs" />
            <input type="date" name="deadline" class="w-full border p-2 rounded text-xs" />
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" onclick="closeModal()" class="px-3 py-1 text-xs">إلغاء</button>
              <button type="submit" class="bg-emerald-600 text-white px-4 py-1.5 rounded text-xs font-bold">نشر التكليف</button>
            </div>
          </form>
        ` : ''}

        ${state.modal === 'add_session' ? `
          <h3 class="text-base font-bold mb-3">جلسة معمل جديدة</h3>
          <form onsubmit="event.preventDefault(); createAttendanceSession(this.title.value, this.date.value);" class="space-y-3">
            <input type="text" name="title" required placeholder="عنوان المعمل" class="w-full border p-2 rounded text-xs" />
            <input type="date" name="date" required value="${new Date().toISOString().split('T')[0]}" class="w-full border p-2 rounded text-xs font-mono" />
            <div class="flex justify-end gap-2 pt-2">
              <button type="button" onclick="closeModal()" class="px-3 py-1 text-xs">إلغاء</button>
              <button type="submit" class="bg-emerald-600 text-white px-4 py-1.5 rounded text-xs font-bold">حفظ الجلسة</button>
            </div>
          </form>
        ` : ''}

        ${state.modal === 'manage_group_officials' ? `
          <h3 class="text-base font-bold mb-3">إدارة مسؤولي المجموعة</h3>
          <form onsubmit="event.preventDefault(); addGroupOfficial(this.name.value, this.academicId.value, this.phone.value, this.role.value, this.pin.value); this.reset();" class="space-y-2">
            <input type="text" name="name" required placeholder="اسم المسؤول" class="w-full border p-1 text-xs" />
            <input type="text" name="academicId" required placeholder="الرقم الأكاديمي" class="w-full border p-1 text-xs font-mono text-center" />
            <input type="text" name="role" placeholder="الدور (مثال: نائب ليدر)" class="w-full border p-1 text-xs" />
            <input type="tel" name="phone" placeholder="الهاتف" class="w-full border p-1 text-xs font-mono" />
            <input type="text" name="pin" required placeholder="رمز PIN المخصص له" class="w-full border p-1 text-xs font-mono text-center" />
            <button type="submit" class="w-full bg-amber-600 text-white py-1.5 rounded text-xs font-bold">+ إضافة مسؤول مجموعة</button>
          </form>
          <div class="pt-3 text-left"><button onclick="closeModal()" class="text-xs text-slate-500">إغلاق</button></div>
        ` : ''}

      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// 14. MAIN INITIALIZATION
// -------------------------------------------------------------
function render() {
  const app = document.getElementById('app');
  if (!state.currentAccount) {
    app.innerHTML = renderAuthScreen();
    return;
  }

  const isGrp = state.userRole === 'group_leader';
  app.innerHTML = `
    <header class="bg-brand-900 text-white shadow-md sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 py-2.5 flex justify-between items-center gap-2">
        <div class="flex items-center space-x-3 space-x-reverse">
          <div class="bg-brand-600 p-2 rounded-xl font-black text-lg">BATU</div>
          <div>
            <h1 class="text-sm sm:text-base font-extrabold">${state.currentAccount.name}</h1>
            <p class="text-xs text-brand-200">جامعة برج العرب التكنولوجية | تكنولوجيا المعلومات</p>
          </div>
        </div>
        <div class="text-xs bg-brand-800 px-3 py-1.5 rounded-lg border border-brand-700">
          كود الدخول: <span class="font-mono font-bold">${state.currentAccount.code}</span>
        </div>
      </div>
    </header>

    <nav class="bg-white dark:bg-slate-800 border-b shadow-sm sticky top-14 z-30">
      <div class="max-w-7xl mx-auto px-4 flex space-x-4 space-x-reverse overflow-x-auto text-xs sm:text-sm font-bold">
        ${isGrp ? `
          <button onclick="state.activeTab='home'; render();" class="py-3 px-2 border-b-2 ${state.activeTab === 'home' ? 'border-amber-600 text-amber-600' : 'border-transparent text-slate-500'}">🏠 الرئيسية</button>
          <button onclick="state.activeTab='grid'; render();" class="py-3 px-2 border-b-2 ${state.activeTab === 'grid' ? 'border-amber-600 text-amber-600' : 'border-transparent text-slate-500'}">📊 شيت متابعة السكاشن</button>
          <button onclick="state.activeTab='tasks'; render();" class="py-3 px-2 border-b-2 ${state.activeTab === 'tasks' ? 'border-amber-600 text-amber-600' : 'border-transparent text-slate-500'}">📢 تكليفات المجموعة</button>
          <button onclick="state.activeTab='students'; render();" class="py-3 px-2 border-b-2 ${state.activeTab === 'students' ? 'border-amber-600 text-amber-600' : 'border-transparent text-slate-500'}">👥 دليل الطلاب والتسكين</button>
          <button onclick="state.activeTab='dashboard'; render();" class="py-3 px-2 border-b-2 ${state.activeTab === 'dashboard' ? 'border-amber-600 text-amber-600' : 'border-transparent text-slate-500'}">📈 إحصائيات</button>
        ` : `
          <button onclick="state.activeTab='home'; render();" class="py-3 px-2 border-b-2 ${state.activeTab === 'home' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-500'}">🏠 الرئيسية</button>
          <button onclick="state.activeTab='grid'; render();" class="py-3 px-2 border-b-2 ${state.activeTab === 'grid' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-500'}">📊 شيت طلاب السكشن</button>
          <button onclick="state.activeTab='assignments'; render();" class="py-3 px-2 border-b-2 ${state.activeTab === 'assignments' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-500'}">📝 التكليفات والشيتات</button>
          <button onclick="state.activeTab='attendance'; render();" class="py-3 px-2 border-b-2 ${state.activeTab === 'attendance' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-500'}">⏱ الحضور والغياب</button>
          <button onclick="state.activeTab='students'; render();" class="py-3 px-2 border-b-2 ${state.activeTab === 'students' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-500'}">👥 دليل الطلاب</button>
          <button onclick="state.activeTab='dashboard'; render();" class="py-3 px-2 border-b-2 ${state.activeTab === 'dashboard' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-500'}">📈 مؤشرات الأداء</button>
        `}
      </div>
    </nav>

    <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">${renderActiveTabContent()}</main>
    ${renderModalContent()}
  `;

  if (state.activeTab === 'dashboard') initDashboardCharts();
}

// التشغيل الأولي
render();