import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InvoiceTracker = () => {
  const [activeTab, setActiveTab] = useState('invoices');
  
  const invoices = [
    {
      id: 'INV-2025-001',
      projectName: 'Desarrollo Web Corporativo',
      amount: 2500.00,
      currency: 'USD',
      issueDate: '2025-01-15',
      dueDate: '2025-02-15',
      status: 'paid',
      paymentDate: '2025-01-20',
      paymentMethod: 'Transferencia Bancaria'
    },
    {
      id: 'INV-2025-002',
      projectName: 'Automatización de Procesos',
      amount: 1800.00,
      currency: 'USD',
      issueDate: '2025-01-20',
      dueDate: '2025-02-20',
      status: 'pending',
      paymentDate: null,
      paymentMethod: null
    },
    {
      id: 'INV-2025-003',
      projectName: 'Consultoría IA - Fase 1',
      amount: 3200.00,
      currency: 'USD',
      issueDate: '2025-01-25',
      dueDate: '2025-02-25',
      status: 'overdue',
      paymentDate: null,
      paymentMethod: null
    }
  ];

  const paymentHistory = [
    {
      id: 1,
      invoiceId: 'INV-2025-001',
      amount: 2500.00,
      currency: 'USD',
      date: '2025-01-20',
      method: 'Transferencia Bancaria',
      reference: 'TXN-789456123',
      status: 'completed'
    },
    {
      id: 2,
      invoiceId: 'INV-2024-012',
      amount: 1500.00,
      currency: 'USD',
      date: '2024-12-15',
      method: 'PayPal',
      reference: 'PP-456789123',
      status: 'completed'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'text-success bg-success/10 border-success/20';
      case 'pending':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'overdue':
        return 'text-error bg-error/10 border-error/20';
      case 'draft':
        return 'text-muted-foreground bg-muted border-border';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'paid':
        return 'Pagada';
      case 'pending':
        return 'Pendiente';
      case 'overdue':
        return 'Vencida';
      case 'draft':
        return 'Borrador';
      default:
        return 'Sin Estado';
    }
  };

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency
    })?.format(amount);
  };

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })?.format(new Date(dateString));
  };

  const totalPending = invoices?.filter(inv => inv?.status === 'pending' || inv?.status === 'overdue')?.reduce((sum, inv) => sum + inv?.amount, 0);

  const totalPaid = invoices?.filter(inv => inv?.status === 'paid')?.reduce((sum, inv) => sum + inv?.amount, 0);

  return (
    <div className="bg-surface rounded-lg elevation-1">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="CreditCard" size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">Facturación y Pagos</h3>
              <p className="text-sm text-muted-foreground">Gestión de facturas y historial de pagos</p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-success/5 border border-success/20 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} color="var(--color-success)" />
              <span className="text-sm font-medium text-success">Total Pagado</span>
            </div>
            <p className="text-xl font-bold text-success mt-1">
              {formatCurrency(totalPaid, 'USD')}
            </p>
          </div>
          
          <div className="bg-warning/5 border border-warning/20 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} color="var(--color-warning)" />
              <span className="text-sm font-medium text-warning">Pendiente</span>
            </div>
            <p className="text-xl font-bold text-warning mt-1">
              {formatCurrency(totalPending, 'USD')}
            </p>
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Icon name="FileText" size={16} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary">Total Facturas</span>
            </div>
            <p className="text-xl font-bold text-primary mt-1">{invoices?.length}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-muted p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('invoices')}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'invoices' ?'bg-surface text-primary shadow-sm' :'text-muted-foreground hover:text-text-primary'
            }`}
          >
            Facturas
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'payments' ?'bg-surface text-primary shadow-sm' :'text-muted-foreground hover:text-text-primary'
            }`}
          >
            Historial de Pagos
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {activeTab === 'invoices' && (
          <div className="space-y-4">
            {invoices?.map((invoice) => (
              <div key={invoice?.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors duration-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                      <Icon name="FileText" size={20} color="var(--color-text-secondary)" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">{invoice?.id}</h4>
                      <p className="text-sm text-muted-foreground">{invoice?.projectName}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-semibold text-text-primary">
                      {formatCurrency(invoice?.amount, invoice?.currency)}
                    </p>
                    <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(invoice?.status)}`}>
                      {getStatusText(invoice?.status)}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Fecha Emisión:</span>
                    <p className="font-medium text-text-primary">{formatDate(invoice?.issueDate)}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Fecha Vencimiento:</span>
                    <p className="font-medium text-text-primary">{formatDate(invoice?.dueDate)}</p>
                  </div>
                  {invoice?.paymentDate && (
                    <div>
                      <span className="text-muted-foreground">Fecha Pago:</span>
                      <p className="font-medium text-text-primary">{formatDate(invoice?.paymentDate)}</p>
                    </div>
                  )}
                  {invoice?.paymentMethod && (
                    <div>
                      <span className="text-muted-foreground">Método:</span>
                      <p className="font-medium text-text-primary">{invoice?.paymentMethod}</p>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" iconName="Download">
                      Descargar PDF
                    </Button>
                    <Button variant="ghost" size="sm" iconName="Eye">
                      Ver Detalles
                    </Button>
                  </div>
                  
                  {invoice?.status === 'pending' && (
                    <Button variant="default" size="sm" iconName="CreditCard">
                      Pagar Ahora
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-4">
            {paymentHistory?.map((payment) => (
              <div key={payment?.id} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">Pago - {payment?.invoiceId}</h4>
                      <p className="text-sm text-muted-foreground">{payment?.method}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-semibold text-success">
                      {formatCurrency(payment?.amount, payment?.currency)}
                    </p>
                    <p className="text-sm text-muted-foreground">{formatDate(payment?.date)}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-muted-foreground">Referencia: </span>
                    <span className="font-mono text-text-primary">{payment?.reference}</span>
                  </div>
                  <div className="text-success font-medium">Completado</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoiceTracker;